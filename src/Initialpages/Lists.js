import {
  StyleSheet, Text, View, FlatList, TouchableOpacity,
  Modal, Animated, PanResponder, Dimensions, BackHandler
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const cardData = [
  { id: '1', title: 'Card 1 Title', description: 'This is the description for card 1.' },
  { id: '2', title: 'Card 2 Title', description: 'This is the description for card 2.' },
  { id: '3', title: 'Card 3 Title', description: 'This is the description for card 3.' },
];

const Lists = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const screenHeight = Dimensions.get('window').height;
  const MODAL_OPEN_Y = screenHeight * 0.4; // Modal takes up 60% of the screen from the bottom
  const MODAL_CLOSED_Y = screenHeight;
  const ANIMATION_CONFIG = { duration: 300, useNativeDriver: false };

  const panY = useRef(new Animated.Value(MODAL_CLOSED_Y)).current;
  const _initialPanY = useRef(0); // To store panY value on gesture grant

  const openModal = () => {
    Animated.timing(panY, {
      toValue: MODAL_OPEN_Y,
      ...ANIMATION_CONFIG,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(panY, {
      toValue: MODAL_CLOSED_Y,
      ...ANIMATION_CONFIG,
    }).start(() => {
      setIsModalVisible(false);
      setSelectedCard(null);
    });
  };

  useEffect(() => {
    if (isModalVisible) {
      openModal();
    }
    // closeModal is triggered by user actions (backdrop, swipe, back button)
  }, [isModalVisible]);

  // Effect for Android hardware back press
  useEffect(() => {
    const backAction = () => {
      if (isModalVisible) {
        closeModal(); // Use the existing closeModal function
        return true; // Prevent default behavior (exit app)
      }
      return false; // Default behavior (app closes, or navigates back)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Cleanup listener
  }, [isModalVisible, closeModal]); // Dependencies

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Only set if vertical movement is significant
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderGrant: (evt, gestureState) => {
        // Store the initial Y position of the sheet when gesture starts
        _initialPanY.current = panY._value; // Accessing the raw value
        panY.setOffset(_initialPanY.current); // Prepare for direct manipulation
        panY.setValue(0); // Reset value for gesture delta
      },
      onPanResponderMove: (evt, gestureState) => {
        // Update Y position based on gesture movement from initial grant position
        // Prevent dragging above the fully open position
        const newY = gestureState.dy; // dy is now relative to the offset
        if (_initialPanY.current + newY >= MODAL_OPEN_Y) {
          panY.setValue(newY);
        } else {
          panY.setValue(MODAL_OPEN_Y - _initialPanY.current); // Limit dragging upwards
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        panY.flattenOffset(); // Consolidate offset and value
        const { dy, vy } = gestureState;
        // Check if swiped down enough to close or with enough velocity
        // current position of panY is panY._value after flattenOffset
        if (panY._value + dy > MODAL_OPEN_Y + (MODAL_CLOSED_Y - MODAL_OPEN_Y) * 0.3 || vy > 0.7) {
          closeModal();
        } else {
          // Snap back to open position
          openModal();
        }
      },
    })
  ).current;

  const renderCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedCard(item);
        setIsModalVisible(true); // This will trigger useEffect to open the modal
      }}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
      />

      <Modal
        animationType="none" // We will control animation with Animated.View
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal} // Use new closeModal function
      >
        <View style={styles.modalBackdrop}>
          <TouchableOpacity
            style={StyleSheet.absoluteFill}
            activeOpacity={1}
            onPress={closeModal} // Use new closeModal function
          />
          <Animated.View
            style={[
              styles.bottomSheetContainer, // Basic styling for the sheet
              { transform: [{ translateY: panY }] } // Apply animated Y position
            ]}
            {...panResponder.panHandlers} // Attach pan handlers
          >
            {/* Optional: Handle bar */}
            <View style={styles.handleBar} />

            {selectedCard && (
              <>
                <Text style={styles.modalTitle}>{selectedCard.title}</Text>
                <Text style={styles.modalDescription}>{selectedCard.description}</Text>
              </>
            )}
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default Lists;

// const screenHeight = Dimensions.get('window').height; // No longer needed here, defined in component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333333',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    justifyContent: 'flex-end', // Align sheet to the bottom
  },
  bottomSheetContainer: {
    height: screenHeight * 0.6, // Example height: 60% of screen
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    // Shadow or elevation for better appearance (optional)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  handleBar: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#cccccc',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
});
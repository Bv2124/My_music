import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

const cardData = [
  { id: '1', title: 'Card 1 Title', description: 'This is the description for card 1.' },
  { id: '2', title: 'Card 2 Title', description: 'This is the description for card 2.' },
  { id: '3', title: 'Card 3 Title', description: 'This is the description for card 3.' },
];

const Lists = (props) => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.reduxDataContainer}>
        <Text style={styles.reduxHeader}>Redux Data:</Text>
        <Text style={styles.reduxText}>Current String: {props.currentString}</Text>
        <Text style={styles.reduxText}>Current Object: {JSON.stringify(props.currentObject)}</Text>
      </View>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    currentString: state.data.currentString,
    currentObject: state.data.currentObject,
  };
};

export default connect(mapStateToProps)(Lists);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  reduxDataContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  reduxHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reduxText: {
    fontSize: 14,
    marginBottom: 3,
  },
  card: {
    backgroundColor: '#f9f9f9', // Keep original card styling
    padding: 15,
    marginVertical: 10, // Keep original card styling
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
  }
});
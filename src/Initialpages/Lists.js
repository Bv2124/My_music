import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const cardData = [
  { id: '1', title: 'Card 1 Title', description: 'This is the description for card 1.' },
  { id: '2', title: 'Card 2 Title', description: 'This is the description for card 2.' },
  { id: '3', title: 'Card 3 Title', description: 'This is the description for card 3.' },
];

const Lists = () => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Lists;

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
  }
});
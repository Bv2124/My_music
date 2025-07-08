import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../redux/slices/counterSlice';
import { COLORS } from '../constants/colors';
import { DIMENSIONS } from '../constants/dimensions';

const Home_Page = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(increment())} color={COLORS.primary} />
        <View style={{ width: DIMENSIONS.marginMedium }} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} color={COLORS.secondary} />
      </View>
    </View>
  );
};

export default Home_Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.appBackground || '#f0f0f0', // Use a background color from constants or a default
  },
  title: {
    fontSize: DIMENSIONS.fontSizeExtraLarge,
    color: COLORS.textPrimary || COLORS.dark, // Use a text color from constants or a default
    marginBottom: DIMENSIONS.marginLarge,
  },
  counterText: {
    fontSize: DIMENSIONS.fontSizeLarge,
    color: COLORS.textSecondary || COLORS.dark,
    marginVertical: DIMENSIONS.marginMedium,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: DIMENSIONS.marginMedium,
  },
});
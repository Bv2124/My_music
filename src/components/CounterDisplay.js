import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { incrementCounter } from '../store/actions/counterActions';

const CounterDisplay = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {props.count}</Text>
      <Button title="Increment" onPress={props.incrementCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);

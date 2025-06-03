import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setStringData, setObjectData } from '../store/actions/dataActions';

const DataDisplay = (props) => {
  const [newString, setNewString] = useState('');
  const [objectKey, setObjectKey] = useState('');
  const [objectValue, setObjectValue] = useState('');

  const handleSetString = () => {
    props.setStringData(newString);
    setNewString('');
  };

  const handleSetObject = () => {
    if (objectKey && objectValue) {
      props.setObjectData({ [objectKey]: objectValue });
      setObjectKey('');
      setObjectValue('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current String:</Text>
      <Text style={styles.data}>{props.currentString}</Text>

      <Text style={styles.label}>Current Object:</Text>
      <Text style={styles.data}>{JSON.stringify(props.currentObject)}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new string"
          value={newString}
          onChangeText={setNewString}
        />
        <Button title="Set String" onPress={handleSetString} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter object key"
          value={objectKey}
          onChangeText={setObjectKey}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter object value"
          value={objectValue}
          onChangeText={setObjectValue}
        />
        <Button title="Set Object" onPress={handleSetObject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  data: {
    fontSize: 16,
    marginBottom: 15,
    padding: 5,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    currentString: state.data.currentString,
    currentObject: state.data.currentObject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStringData: (text) => dispatch(setStringData(text)),
    setObjectData: (data) => dispatch(setObjectData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataDisplay);

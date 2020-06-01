import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  const {placeholder} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  input: {},
});

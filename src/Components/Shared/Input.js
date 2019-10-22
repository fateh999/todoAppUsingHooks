import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Theme from '../../Config/Theme';

function Input({style, onChangeText, value}) {
  const styles = StyleSheet.create({
    textInputStyle: {
      height: 50,
      width: 'auto',
      backgroundColor: Theme.white,
      color: Theme.dark,
      paddingHorizontal: 15,
      borderRadius: 25,
      fontSize: 20,
      ...style,
    },
  });

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.textInputStyle}></TextInput>
  );
}

export default Input;

import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputData = ({
  formLabel,
  placeholder,
  keyboardType,
  isTextArea,
  value,
  onChangeText,
  namaState,
}) => {
  if (isTextArea) {
    return (
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>{formLabel}</Text>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder={placeholder}
          style={styles.formInputArea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={text => onChangeText(namaState, text)}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.formItem}>
        <Text style={styles.formLabel}>{formLabel}</Text>
        <TextInput
          placeholder={placeholder}
          style={styles.formInput}
          keyboardType={keyboardType}
          value={value}
          onChangeText={text => onChangeText(namaState, text)}
        />
      </View>
    </View>
  );
};

export default InputData;

const styles = StyleSheet.create({
  formItem: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  formInput: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
  formInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
});

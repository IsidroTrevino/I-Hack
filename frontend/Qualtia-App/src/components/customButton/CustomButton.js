import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type = 'primary' }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#273996',
  },

  container_secondary: {
    backgroundColor: 'white',
    borderColor: '#273996',
    borderWidth: 1,
  },

  container_tertiary: {
    backgroundColor: '#FFC369',
    borderRadius: 20,
    width: '50%', 
    height: 50,
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_tertiary: {
    color: 'gray',
  },

  text_secondary: {
    color: '#aeacac',
  },
});

export default CustomButton;

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = ({ text, img, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image source={img} style={styles.image} />
      {description && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 350,
    height: 200,
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    padding: 10,
    fontSize: 12,
  },
});

export default Card;

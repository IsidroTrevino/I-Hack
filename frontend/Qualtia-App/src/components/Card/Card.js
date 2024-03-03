import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = ({ text, img, description, onPress, price, Touchable = true }) => {
  const ContainerComponent = Touchable ? TouchableOpacity : View;

  return (
    <ContainerComponent style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image source={img} style={styles.image} />
      {description && <Text style={styles.description}>{description}</Text>}
      {price && <Text style={styles.price}>{price}</Text>}
    </ContainerComponent>
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
  price: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default Card;

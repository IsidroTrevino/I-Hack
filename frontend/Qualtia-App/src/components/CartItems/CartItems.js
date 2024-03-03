import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItems = ({ image, title, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemove = () => {
    console.log('Remove');
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrement}>
          <Icon name="remove" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement}>
          <Icon name="add" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.removeContainer} onPress={handleRemove}>
        <Icon name="trash-bin" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    width: 350,
    backgroundColor: '#FFC369',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#777',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  removeContainer: {
    marginLeft: 10,
  },
});

export default CartItems;

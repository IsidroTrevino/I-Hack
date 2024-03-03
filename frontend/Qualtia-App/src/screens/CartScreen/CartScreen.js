import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import CartItems from '../../components/CartItems/CartItems';
import carne from '../../../assets/images/Carnes.png';
import AngusComida from '../../../assets/images/AngusComida.png';
import ApplyPromotion from '../../components/ApplyPromotion';
import Separator from '../../components/Separator'; 
import React from 'react';

const CartScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'} />
      <Text style={styles.title}>Tu Carrito</Text>
      <CartItems image={carne} title={'Carne'} price={'299.00'} />
      <Separator /> 
      <CartItems image={AngusComida} title={'Angus Beef'} price={'999.99'} />
      <Separator /> 
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal:</Text>
        <Text style={styles.subtotalAmount}>1298.99</Text>
      </View>
      <ApplyPromotion />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingLeft: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },

  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
    marginBottom: 40,
  },

  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtotalAmount: {
    fontSize: 18,
  },
});

export default CartScreen;

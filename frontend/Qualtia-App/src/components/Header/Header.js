import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Logo from '../../../assets/images/qualtia_logo.png';
import MenuIcon from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'; 
import Menu from '../Menu';
import React from 'react';

const Header = ({ leftIcon }) => {
  const navigation = useNavigation();

  const onLeftIconPress = (iconName) => {
    if (iconName === 'bars') {
        navigation.navigate('Menu');
    } else if (iconName === 'arrow-left') {
      navigation.navigate('Home');
    }
  };

  const onCartIconPress = () => {
    console.log('cart');
  };

  return (
    <View style={styles.root}>
      <MenuIcon
        name={leftIcon}
        size={30}
        color="black"
        style={styles.burger_menu}
        onPress={() => onLeftIconPress(leftIcon)}
      />
      <Image source={Logo} style={styles.logo} resizeMode='contain' />
      <CartIcon
        name='shopping-cart'
        size={30}
        color="black"
        style={styles.cart}
        onPress={onCartIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '15%',
    backgroundColor: '#273996',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    flexDirection: 'row',
  },

  logo: {
    maxHeight: 100,
    width: '40%',
    maxWidth: 200,
  },
  burger_menu: {
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 30,
    top: 78,
  },
  cart: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 30,
    top: 78,
  },
});

export default Header;

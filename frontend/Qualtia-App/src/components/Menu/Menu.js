import { StyleSheet, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MenuOption from '../MenuOptions/MenuOption';
import Separator from '../Separator';
import React from 'react';

const Menu = () => {
  return (
    <View style={[styles.container, styles.absolutePosition]}>
        <FeatherIcon name="arrow-left" size={30} color="black" style={styles.arrowLeft} />
        <Text style={styles.title}>Menú de opciones</Text>
        <MenuOption icon={'account'} option={'Mi cuenta'} />
        <Separator />
        <MenuOption icon={'brightness-percent'} option={'Promociones'} />
        <Separator />
        <MenuOption icon={'sausage'} option={'Winis'} />
        <Separator/>
        <MenuOption icon={'book-open-page-variant'} option={'Recetas'} />
        <Separator />
        <MenuOption icon={'human-queue'} option={'Comunidades'}/>
        <Text style={styles.spacer}></Text>
        <MenuOption icon={'account-tie-voice'} option={'Soporte'} />
        <Separator />
        <MenuOption icon={'question-mark'} option={'Configuración'} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7D6D6',
    width: '60%',
    height: '100%',
    flex: 1,
    borderColor: '#e8e8e8',
    paddingTop: 160,
    paddingLeft: 20,
    paddingHorizontal: 20,
  },
  arrowLeft: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  absolutePosition: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    spacer: {
        height: 370,
    },
});

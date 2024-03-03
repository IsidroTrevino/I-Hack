import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import React from 'react';

const MenuOption = ({ icon, option }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color="black" />
      </View>
      <Text style={styles.text}>{option}</Text>
    </View>
  );
};

export default MenuOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const MenuOption = ({ icon, option, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color="black" />
      </View>
      <Text style={styles.text}>{option}</Text>
    </Pressable>
  );
};

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

export default MenuOption;

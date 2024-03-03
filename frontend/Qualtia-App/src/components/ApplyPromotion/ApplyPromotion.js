import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../customButton/CustomButton';
import React from 'react';

const ApplyPromotion = () => {
  return (
    <View style={styles.root}>
      <Text>Promoción</Text>
      <CustomButton text={'Aplicar'} type={'tertiary'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 70,
    width: 250,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
});

export default ApplyPromotion;

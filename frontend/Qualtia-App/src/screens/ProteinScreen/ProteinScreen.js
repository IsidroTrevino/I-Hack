import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card/Card.js'
import carne from '../../../assets/images/Carnes.png'
import React from 'react'

const ProteinScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'}/>
      <ScrollView> 
        <Card 
            text='Carne' 
            img={carne} 
            description={'Hola soy una carne que rico muy muy muy rico yummy yummy'}
            price={'$100.00'}
            Touchable = {false}
        />
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC',
      },
})

export default ProteinScreen
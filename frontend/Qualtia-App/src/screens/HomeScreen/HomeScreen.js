import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card/Card.js'
import carne from '../../../assets/images/Carnes.png'
import jamon from '../../../assets/images/jamon.jpeg'
import lacteos from '../../../assets/images/queso.jpeg'
import foodSolutions from '../../../assets/images/FoodSolutions.jpeg'
import Menu from '../../components/Menu/Menu.js'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const HomeScreen = () => {

  const navigation = useNavigation();

  const onPressProtein = () => {
    navigation.navigate('Protein');
  }

  const onPressColdMeat = () => {
    navigation.navigate('ColdMeat');
  }

  const onPressDairy = () => {
    navigation.navigate('Dairy');
  }

  const onPressFoodSolutions = () => {
    navigation.navigate('FoodSolutions');
  }

  return (
    <View style={styles.root}>
      <Header leftIcon='bars'/>
      <ScrollView>
        <Text style={styles.text}>Nuestros Productos</Text>
        <Card text='Proteínas' img={carne} onPress={onPressProtein}/>
        <Card text={'Carnes Frías'} img={jamon} onPress={onPressColdMeat}/>
        <Card text={'Lácteos'} img={lacteos} onPress={onPressDairy}/>
        <Card text={'Food Solutions'} img={foodSolutions} onPress={onPressFoodSolutions}/>
      </ScrollView>
      <Menu/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingLeft: 20,
    marginBottom: 20,
  }
})


export default HomeScreen
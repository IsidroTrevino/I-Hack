import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card/Card'
import Food1 from '../../../assets/images/Kirlunch1.png'
import Food2 from '../../../assets/images/Ready.png'
import Food3 from '../../../assets/images/TiaVi.png'
import Food4 from '../../../assets/images/Kirlunch2.png'
import React from 'react'

const FoodSolutionScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'}/>
      <ScrollView>
      <Card 
            text='Sandwich kirlunch de pan integral jumbo triple 180g' 
            img={Food1} 
            description={'El sandwich Kirlunch de pan integral jumbo triple de 180g es una deliciosa opción para satisfacer el apetito con su generosa porción de pan integral y triple capa de relleno. '}
            price={'$45.00'}
            Touchable = {false}
        />
        <Card 
            text='Comida del dia picadillo 290g' 
            img={Food2} 
            description={'Mezcla tradicional de carne molida, verduras y especias. Perfecta para una comida rápida pero satisfactoria, esta opción ofrece un equilibrio de sabores y nutrientes para disfrutar en cualquier momento del día.'}
            price={'$79.00'}
            Touchable = {false}
        />
        <Card 
            text='Tia Vicky Mole de Pechuga de Pollo 500g' 
            img={Food3} 
            description={'El Mole de Pechuga de Pollo de Tía Vicky en presentación de 500g ofrece una deliciosa combinación de sabores mexicanos tradicionales, con su característica salsa de mole que realza el sabor de la pechuga de pollo tierna y jugosa. Listo para calentar y servir, este plato es una opción conveniente y reconfortante para disfrutar en cualquier ocasión.'}
            price={'$88.00'}
            Touchable = {false}
        />
        <Card 
            text='Pizza Congelada Kirlunch' 
            img={Food4} 
            description={'La Pizza Congelada Kirlunch ofrece una solución rápida y deliciosa para satisfacer los antojos de pizza en casa.'}
            price={'$64.02'}
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
    }
})

export default FoodSolutionScreen;
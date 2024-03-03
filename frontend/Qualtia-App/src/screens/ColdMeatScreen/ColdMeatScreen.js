import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Salchicha from '../../../assets/images/johnsonVilleBeer.jpg'
import Card from '../../components/Card/Card'
import alpino from '../../../assets/images/alpinoJAmon.jpg'
import kirPavo from '../../../assets/images/kirdepavo.jpg'
import React from 'react'

const ColdMeatScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'}/>
      <ScrollView>
        <Card 
              text='Salchicha Johnson Ville' 
              img={Salchicha} 
              description={'La salchicha es un alimento procesado que se elabora generalmente a partir de carne picada o una mezcla de carnes, especias y otros ingredientes. Existen diferentes variedades de salchichas en todo el mundo, y su preparación puede variar según las tradiciones culinarias y las preferencias regionales.'}
              price={'$300'}
              Touchable = {false}
          />

          <Card 
              text='Jamón de Pierna Alpino' 
              img={alpino} 
              description={'El jamón de pierna es un producto alimenticio elaborado a partir de la pata trasera del cerdo, específicamente de la región de las patas llamada "pierna". Este tipo de jamón es conocido por su sabor característico y su textura jugosa.'}
              price={'$110.50'}
              Touchable = {false}
          />

          <Card 
              text='Jamon Americano de Pavo' 
              img={kirPavo} 
              description={'El jamón de pavo es un producto alimenticio que se elabora a partir de carne de pavo y suele ser una alternativa más magra al jamón de cerdo.'}
              price={'$83.50'}
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

export default ColdMeatScreen
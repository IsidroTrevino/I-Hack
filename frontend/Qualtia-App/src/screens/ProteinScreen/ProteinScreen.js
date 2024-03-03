import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card/Card.js'
import carne1 from '../../../assets/images/AngusComida.png'
import carne2 from '../../../assets/images/Northstar.png'
import carne3 from '../../../assets/images/MishimaComida.png'
import carne4 from '../../../assets/images/Intoku.png'
import React from 'react'

const ProteinScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'}/>
      <ScrollView> 
        <Card 
            text='New York Angus Premium Beef 600g' 
            img={carne1} 
            description={'El New York Angus Premium Beef de 600g es un corte de carne de res de primera calidad, procedente de la región del filete de Nueva York. Con su marmoleo característico y jugosidad excepcional, es perfecto para satisfacer los paladares más exigentes en una generosa porción de 600 gramos.'}
            price={'$528.00'}
            Touchable = {false}
        />
        <Card 
            text='Northstar Beef Arrachera' 
            img={carne2} 
            description={'La Northstar Beef Arrachera es un corte de carne jugoso y lleno de sabor, ideal para parrillas y asados. '}
            price={'$163.50'}
            Touchable = {false}
        />
        <Card 
            text='Mishima Reserve Rib eye 300g' 
            img={carne3} 
            description={'El Mishima Reserve Ribeye de 300g es un corte de carne de alta calidad, procedente del exclusivo ganado Mishima en Japón. Con su infiltración de grasa única y un sabor extraordinario, este ribeye ofrece una experiencia gourmet incomparable en cada bocado.'}
            price={'$910.00'}
            Touchable = {false}
        />
        <Card 
            text='Intoku Akaushi Wagyu Cowboy Steak Bone' 
            img={carne4} 
            description={'El Intoku Akaushi Wagyu Cowboy Steak Bone es un corte de carne de wagyu Akaushi excepcionalmente jugoso y lleno de sabor, con un hueso que añade un toque de rusticidad a la experiencia gastronómica. '}
            price={'$2,769.3'}
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
import { StyleSheet, Text, View , ScrollView} from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card/Card'
import Queso from '../../../assets/images/panela.jpeg'
import QM from '../../../assets/images/manchego.jpg'
import React from 'react'

const DairyScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'}/>
      <ScrollView>
      <Card 
            text='Queso Panela' 
            img={Queso} 
            description={'El queso panela es un tipo de queso fresco que es originario de México y se utiliza ampliamente en la cocina tradicional mexicana.'}
            price={'$100.75'}
            Touchable = {false}
        />

        <Card 
            text='Queso Manchego' 
            img={QM} 
            description={'El queso manchego es un queso español tradicional que se elabora principalmente con leche de oveja de la raza manchega. Este queso tiene una Denominación de Origen Protegida (DOP), lo que significa que debe cumplir con ciertos estándares y procedimientos de producción específicos para llevar la denominación "Manchego".'}
            price={'$130.42'}
            Touchable = {false}
        />

        <Card 
            text='Queso Manchego' 
            img={QM} 
            description={'El queso manchego es un queso español tradicional que se elabora principalmente con leche de oveja de la raza manchega. Este queso tiene una Denominación de Origen Protegida (DOP), lo que significa que debe cumplir con ciertos estándares y procedimientos de producción específicos para llevar la denominación "Manchego".'}
            price={'$130.42'}
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

export default DairyScreen
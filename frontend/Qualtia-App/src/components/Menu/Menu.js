import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hola</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        width: '40%',
        borderColor: '#e8e8e8',
        borderWidth:1,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    }

})
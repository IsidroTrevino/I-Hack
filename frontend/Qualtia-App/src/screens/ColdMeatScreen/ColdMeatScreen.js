import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import React from 'react'

const ColdMeatScreen = () => {
  return (
    <View style={styles.root}>
      <Header leftIcon={'arrow-left'}/>
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
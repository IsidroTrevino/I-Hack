import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Header/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
})


export default HomeScreen
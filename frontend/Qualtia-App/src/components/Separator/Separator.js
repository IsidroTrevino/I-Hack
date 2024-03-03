import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={styles.separator}>
    </View>
  )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#000000',
    }
})

export default Separator
import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function ResultScreen (props) {
  return (
    <View style={styles.container}>
      <Text> ResultScreen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
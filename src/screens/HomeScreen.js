import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from "react-native-paper"

export default function HomeScreen (props) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log("go to next window")}>
        <Text style={styles.buttonLabel} children="BẮT ĐẦU"/>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250,
    padding: 10,
  },
  buttonLabel: {
    fontSize: 25
  }
})
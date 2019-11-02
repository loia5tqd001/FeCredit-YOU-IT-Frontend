import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from "react-native-paper"

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        contentStyle={{ margin: 10 }}
        mode="contained"
        onPress={() => navigation.push("FormScreen")}>
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
    width: 250
  },
  buttonLabel: {
    fontSize: 25
  }
})
import React, { useState } from "react"
import { View, StyleSheet, Dimensions, Text } from "react-native"
import Dash from "react-native-dash"

function Item({ color, string }) {
  const ITEM_RADIUS = 10

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          position: "relative",
          width: ITEM_RADIUS * 2,
          height: ITEM_RADIUS * 2,
          borderRadius: ITEM_RADIUS,
          backgroundColor: color,
          marginTop: -ITEM_RADIUS,
          marginLeft: -ITEM_RADIUS,
          marginRight: -ITEM_RADIUS
        }}
      />
      <Text
        style={{
          color,
          fontSize: 11,
          textAlign: "center"
        }}
        children={string}
      />
    </View>
  )
}

export default function TimelineComponent({ currentProgress = 1 }) {
  const getColor = progress => {
    colors = { active: "#005C28", inactive: "gray" }

    if (progress <= currentProgress) {
      return colors.active
    } else {
      return colors.inactive
    }
  }
  return (
    <View style={styles.container}>
      <Dash
        dashThickness={0.5}
        dashColor="gray"
        dashLength={8}
        dashGap={10}
        style={{ width: "80%" }}
      />
      <View style={styles.itemContainer}>
        <Item color={getColor(1)} string="Nhập thông tin" />
        <Item color={getColor(2)} string="CMND mặt trước" />
        <Item color={getColor(3)} string="CMND mặt sau" />
        <Item color={getColor(4)} string="Chụp khuôn mặt" />
      </View>
    </View>
  )
}

const MARGIN = 10
const styles = StyleSheet.create({
  container: {
    marginVertical: MARGIN * 2.5,
    marginHorizontal: MARGIN,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - MARGIN * 2
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

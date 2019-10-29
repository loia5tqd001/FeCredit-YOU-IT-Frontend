import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
// import CameraStore, { MERGE_STATE, useStore } from "../stores/CameraStore"

function PickImage({ color }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [20, 13]
    })
  }

  return (
    <View style={styles.pickImage}>
      <TouchableOpacity onPress={pickImage} style={styles.center}>
        <Ionicons name="md-photos" color={color} size={30} />
      </TouchableOpacity>
      <Text style={{ fontWeight: "500", color }}>Chọn từ kho</Text>
    </View>
  )
}

function SnapButton({ camera }) {
  // const [state] = useStore(CameraStore)

  const snap = async () => {
    // if (state.cameraRef) {
    //   const photo = await cameraRef.takePictureAsync()
    //   console.warn(photo)
    //   console.log(photo)
    //   // if (photo) {
    //   //   this.setState({ imageuri: photo.uri })
    //   // }
    // }
  }

  return (
    <TouchableOpacity
      // onPressIn={onCaptureIn}
      // onPressOut={onCaptureOut}
      // onLongPress={onLongCapture}
      // onPress={onShortCapture}
      style={styles.captureButton}>
      <MaterialIcons name="center-focus-strong" color="gray" size={30} />
    </TouchableOpacity>
  )
}

export default function CameraToolbar({ camera }) {
  return (
    <View style={[styles.center, { marginVertical: 20 }]}>
      <PickImage color="#005C28" />
      <SnapButton camera={camera} />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  pickImage: {
    position: "absolute",
    left: 15
  },
  captureButton: {
    width: 75,
    height: 75,
    backgroundColor: "#020003",
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  }
})

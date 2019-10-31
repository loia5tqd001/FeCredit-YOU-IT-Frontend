import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { getGlobal } from "reactn"
import setImage from '../utils/setImage'

function PickImage({ color }) {

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [20, 13]
    })

    if (!result.cancelled) {
      setImage(result)
    }
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

function SnapButton(props) {

  const snap = async () => {
    const { camera } = getGlobal() 
    if (camera) {
      const photo = await camera.takePictureAsync()
      if (photo) {
        setImage(photo)
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={snap}
      style={styles.captureButton}>
      <MaterialIcons name="center-focus-strong" color="gray" size={30} />
    </TouchableOpacity>
  )
}

export default function CameraToolbar(props) {
  return (
    <View style={[styles.center, { marginVertical: 20 }]}>
      <PickImage color="#005C28" />
      <SnapButton />
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
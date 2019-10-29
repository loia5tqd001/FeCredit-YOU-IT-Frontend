import React, { useEffect, useRef } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"
import { Camera } from "expo-camera"
import * as Permissions from "expo-permissions"
import CameraStore, { MERGE_STATE, useStore } from "../stores/CameraStore"

export default function FrontIdCamera(props) {
  const [state, dispatch] = useStore(CameraStore)
  const camera = useRef(null)

  useEffect(() => {
    dispatch({
      type: MERGE_STATE,
      mergeState: { cameraRef: camera.current }
    })
  }, [camera.current])

  return (
    <View style={styles.container}>
      <Camera
        type={Camera.Constants.Type.back}
        style={styles.cameraPreview}
        ref={camera}
      />
      <Text style={styles.text} children="Đặt CMND mặt trước vào khung" />
    </View>
  )
}

const winWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cameraPreview: {
    width: winWidth,
    height: winWidth * 0.65,
    position: "absolute",
    left: 0
  },
  text: {
    fontWeight: "500",
    color: "#020003",
    position: "relative",
    fontSize: 19,
    top: winWidth * 0.38
  }
})

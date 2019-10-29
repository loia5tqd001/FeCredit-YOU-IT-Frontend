import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Constants from "expo-constants"

import TimelineComponent from "./components/TimelineComponent"
import CameraToolbar from "./components/CameraToolbar"
// import FrontIdCamera from "./src/components/FrontIdCamera"
// import CameraPage from "./src/components/camera"
// import ImagePicker from "./src/components/ImagePicker"
// import BackIdCamera from "./src/components/BackIdCamera"
// import VerifyFrontId from "./src/components/VerifyFrontId"

import { setGlobal } from "reactn"

setGlobal({
  camera: null,
  frontIdUri: "",
  backIdUri: "",
  faceUri: ""
})

export default function App(props) {
  return (
    <View style={styles.container}>
      {/* <ImagePicker/> */}
      <TimelineComponent />
      {/* <VerifyFrontId /> */}
      {/* <FrontIdCamera /> */}
      {/* <BackIdCamera /> */}
      <CameraToolbar />
      {/* <CameraPage /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})

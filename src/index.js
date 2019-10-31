import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import Constants from "expo-constants"
import * as Permissions from "expo-permissions"

import TimelineComponent from "./components/TimelineComponent"
import CameraToolbar from "./components/CameraToolbar"
import FrontIdCamera from "./components/FrontIdCamera"
// import CameraPage from "./src/components/camera"
// import ImagePicker from "./src/components/ImagePicker"
// import BackIdCamera from "./src/components/BackIdCamera"
import VerifyFrontId from "./components/VerifyFrontId"
import FaceCamera from "./components/FaceCamera"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import { setGlobal } from "reactn"
// import Popup from './components/Popup'
// import HomeScreen from "./components/HomeScreen"
import FormScreen from "./components/FormScreen"

setGlobal({
  hasPermission: null,
  camera: null,
  currentProgress: 2,
  frontIdUri: "",
  backIdUri: "",
  faceUri: ""
})

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#005C28",
    accent: "#020003",
    error: "#B30E00"
  }
}

export default function App(props) {
  useEffect(() => {
    const askPermission = async () => {
      const camera = await Permissions.askAsync(Permissions.CAMERA)
      const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      const hasPermission = camera.status === "granted" && cameraRoll.status === "granted"
      setGlobal({ hasPermission })

      if (!hasPermission) {
        alert("You need to give us permission to Camera and Camera Roll to get the app work properly! Please manually go to Settings and add us permission")
      }
    }
    
    askPermission()
  }, [])



  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <TimelineComponent />
        {/* <HomeScreen/> */}
        {/* <Test/> */}
        <FormScreen/>
        {/* <VerifyFrontId /> */}
        {/* <FrontIdCamera />   */}
        {/* <BackIdCamera /> */}
        {/* <FaceCamera /> */}
        {/* <CameraToolbar /> */}
        {/* <CameraPage /> */}
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})

import React from "react"
import { Camera } from "expo-camera"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Col, Row, Grid } from "react-native-easy-grid"
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import * as ImagePicker from "expo-image-picker"

import styles from "./style"

const { Type: CameraTypes } = Camera.Constants

const _pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [20, 13]
  })
}

export default ({
  capturing = false,
  cameraType = CameraTypes.back,
  setCameraType,
  onCaptureIn,
  onCaptureOut,
  onLongCapture,
  onShortCapture
}) => (
  <Grid style={styles.bottomToolbar}>
    <Row>
      <Col style={styles.alignCenter}>
        <TouchableOpacity onPress={_pickImage}>
          <Ionicons name="md-photos" color="black" size={30} />
        </TouchableOpacity>
      </Col>
      <Col size={2} style={styles.alignCenter}>
        <TouchableWithoutFeedback
          onPressIn={onCaptureIn}
          onPressOut={onCaptureOut}
          onLongPress={onLongCapture}
          onPress={onShortCapture}>
          <View
            style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
            <MaterialIcons name="center-focus-strong" color="white" size={30} />
          </View>
        </TouchableWithoutFeedback>
      </Col>
      <Col></Col>
    </Row>
  </Grid>
)

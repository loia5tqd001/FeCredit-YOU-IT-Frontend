import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import FaceScreen from "../screens/FaceScreen"
import VerifyFaceScreen from "../screens/VerifyFaceScreen"

const FaceStack = createStackNavigator()

export default function _FaceStack() {
  return (
    <FaceStack.Navigator headerMode="none">
      <FaceStack.Screen 
        name="FaceScreen" 
        component={FaceScreen} 
      />
      <FaceStack.Screen
        name="VerifyFaceScreen"
        component={VerifyFaceScreen}
      />
    </FaceStack.Navigator>
  )
}

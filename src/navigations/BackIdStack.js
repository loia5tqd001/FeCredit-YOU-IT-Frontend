import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import BackIdScreen from "../screens/BackIdScreen"
import VerifyBackIdScreen from "../screens/VerifyBackIdScreen"

const BackIdStack = createStackNavigator()

export default function _BackIdStack() {
  return (
    <BackIdStack.Navigator headerMode="none">
      <BackIdStack.Screen 
        name="BackIdScreen" 
        component={BackIdScreen} 
      />
      <BackIdStack.Screen
        name="VerifyBackIdScreen"
        component={VerifyBackIdScreen}
      />
    </BackIdStack.Navigator>
  )
}

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import BackIdScreen from "../screens/BackIdScreen"
import VerifyFrontIdScreen from "../screens/VerifyFrontIdScreen"

const BackIdStack = createStackNavigator()

export default function _BackIdStack() {
  return (
    <BackIdStack.Navigator headerMode="none">
      <BackIdStack.Screen 
        name="BackIdScreen" 
        component={BackIdScreen} 
      />
      <BackIdStack.Screen
        name="VerifyFrontIdScreen"
        component={VerifyFrontIdScreen}
      />
    </BackIdStack.Navigator>
  )
}

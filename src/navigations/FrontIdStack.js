import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import FrontIdScreen from "../screens/FrontIdScreen"
import VerifyFrontIdScreen from "../screens/VerifyFrontIdScreen"

const FrontIdStack = createStackNavigator()

export default function _FrontIdStack() {
  return (
    <FrontIdStack.Navigator headerMode="none">
      <FrontIdStack.Screen
        name="FrontIdScreen"
        component={FrontIdScreen}
      />
      <FrontIdStack.Screen
        name="VerifyFrontIdScreen"
        component={VerifyFrontIdScreen}
      />
    </FrontIdStack.Navigator>
  )
}

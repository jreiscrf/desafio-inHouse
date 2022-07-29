import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/Login";
import Home from "../../pages/Home";

const PublicStack = createNativeStackNavigator();

export const Public = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </PublicStack.Navigator>
  );
};

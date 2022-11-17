import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { Result } from "./src/screens/Result";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nome">
        <Stack.Screen
          name="Nome"
          component={Home}
          options={{ title: "Inicio", headerStyle: {backgroundColor: colors.purpleLight}}}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ title: "Resultado", headerStyle: {backgroundColor: colors.purpleLight}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
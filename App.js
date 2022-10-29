import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/constants";
import { Card } from "./src/components/Card";
import { Input } from "./src/components/Input";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Input label="Peso" />

        <Input label="Altura" />

        <Button title="Calcular" />

        <Button title="Limpar" secondary />
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

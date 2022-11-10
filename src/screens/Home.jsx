import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Home({ navigation }) {
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);

  const handleCalculate = () => {
    const value = (1.0 * weight) / (height * height);
    alert(value);
  };

  const handleClear = () => {
    navigation.navigate("Result");
    setWeight(0.0);
    setHeight(0.0);
  };

  const handleWeight = (text) => {
    const num = parseFloat(text);
    setWeight(num);
  };

  const handleHeight = (text) => {
    const num = parseFloat(text);
    setHeight(num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Card>
        <Input
          label="Peso"
          keyboardType="numeric"
          value={weight}
          onChangeText={handleWeight}
          returnKeyType="next"
        />

        <Input
          label="Altura"
          keyboardType="numeric"
          value={height}
          onChangeText={handleHeight}
          returnKeyType="next"
        />

        <Button title="Calcular" onPress={handleCalculate} />

        <Button title="Limpar" onPress={handleClear} secondary />
      </Card>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
});

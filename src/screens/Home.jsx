import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../constants";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export function Home({ navigation }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const clear = () => {
    setWeight("");
    setHeight("");
  };

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (isNaN(w) || isNaN(h)) {
      alert("Please enter a valid weight and height");
      clear();
      return;
    }
    const result = w / (h * h);
    const alerta = resultImc(result)

    navigation.navigate("Result", { imc: result, alerta: alerta });
  };

  const resultImc = (result) => {
    let alerta = '';

    if(result >= 40.0){
      alerta = "Obesidade classe III"
    }else if(result >= 35.00){
      alerta = "Obesidade classe II"
    }else if (result >= 30.00){
      alerta = "Obesidade classe I"
    }else if(result >= 25.00){
      alerta = "Acima do peso"
    }else if(result >= 18.6){
      alerta = "Peso normal"
    }else{
      alerta = "Desnutrido"
    }

    return alerta
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Card>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Peso</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            returnKeyType="next"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Altura</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
            returnKeyType="next"
          />
        </View>

        <Button title="Calcular" onPress={calculate} />

        <Button title="Limpar" onPress={clear} secondary />
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
  inputWrapper: {
    width: "100%",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  label: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.inputs,
    borderColor: colors.purple,
    borderRadius: 8,
    padding: 16,
    height: 64,
    width: "100%",
    fontSize: 24,
    color: colors.gray,
  }
});

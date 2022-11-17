import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/Card";
import { colors } from "../constants";

export function Result({ navigation, route }) {
  const { imc } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imcWrapper}>
          <Text style={styles.imcText}>IMC</Text>
          <Text style={styles.imcText}>{imc.toFixed(2)}</Text>
        </View>
      </Card>
      <Card>
        <table border= "1" style={styles.table}>
          <tr>
            <td >IMC</td>
            <td>Classificação</td>
          </tr>
          <tr>
            <td>Menor que 18.5</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>18.6 - 24.9</td>
            <td>Peso normal</td>
          </tr>
          <tr>
            <td>25.0 - 29.9</td>
            <td>Acima do peso</td>
          </tr>
          <tr>
            <td>30.0 - 34.9</td>
            <td>Obesidade classe I</td>
          </tr>
          <tr>
            <td>35.0 - 39.9</td>
            <td>Obesidade classe II</td>
          </tr>
          <tr>
            <td>Maior ou igual a 40.0</td>
            <td>Obesidade classe III</td>
          </tr>
        </table>
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
  imcWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  imcText: {
    fontSize: 24,
    color: colors.white,
  },
  table: {
    fontSize: 14,
    color: colors.white,
    borderWidth: 1,
    borderStyle: "radius",
    alignItems: "center",
    justifyContent: "center",
  },
});

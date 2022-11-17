import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/Card";
import { colors } from "../constants";

export function Result({ navigation, route }) {
  const { imc } = route.params;
  const { alerta } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imcWrapper}>
          <Text style={styles.imcText}>IMC</Text>
          <Text style={styles.imcText}>{imc.toFixed(2)}</Text>
        </View>
      </Card>
      <Card>
        <View>
        <Text style={styles.results}> Sua classificação de IMC é {alerta} </Text>
        </View>
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
  results: {
    fontSize: 16,
    color: colors.orange,
  },
});

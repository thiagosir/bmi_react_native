import { View, Text, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants";

export function Input({ onChangeText, value, label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 24,
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
    height: 50,
    width: "100%",
    fontSize: 16,
    color: colors.gray,
  },
});

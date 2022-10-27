import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

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

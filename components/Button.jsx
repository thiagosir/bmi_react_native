import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export function Button({ onPress, title, type }) {
  const backgroundColor = type === "secondary" ? "#7400B8" : "#4EA8DE";

  const buttonStyles = { ...styles.button, backgroundColor };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4EA8DE",
    borderColor: "#5E60CE",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});

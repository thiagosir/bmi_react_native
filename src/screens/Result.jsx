import { View, Text } from "react-native";
import React from "react";
import { Card } from "../components/Card";

export function Result() {
  return (
    <View style={styles.container}>
      <Card>
        <Text>Result</Text>
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
});

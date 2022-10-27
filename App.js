import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Input label="Peso" value="" />

        <Input label="Altura" value="" />

        <Button title="Calcular" />

        <Button title="Limpar" type="secondary" />
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3ecff",
    alignItems: "center",
    justifyContent: "center",
  },
});

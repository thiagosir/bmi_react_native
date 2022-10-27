import { StyleSheet, View } from "react-native";

export const Card = (props) => {
  const { children } = props;

  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#666",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    width: "90%",
  },
});

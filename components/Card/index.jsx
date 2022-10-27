import { StyleSheet, View } from "react-native";

export const Card = (props) => {
  const { children } = props;

  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#6930C3",
    borderColor: "#5E60CE",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    margin: 16,
    width: "90%",
  },
});

import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";

export const ExpensesTotal = ({ label, total }) => (
  <View style={styles.container}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.totalText}>${total}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.PRIMARY,
    marginTop: 16,
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },

  labelText: {
    color: "gray",
    fontSize: 28
  },
  totalText: {
    color: "white",
    fontSize: 28
  }
});
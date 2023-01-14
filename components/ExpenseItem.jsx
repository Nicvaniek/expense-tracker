import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants";

export const ExpenseItem = ({ expense }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.label}>{expense.title}</Text>
        <Text style={styles.date}>{expense.date.toLocaleDateString()}</Text>
    </View>
    <View style={styles.amountContainer}>
      <Text style={styles.amount}>${expense.amount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 8,
    padding: 12
  },
  amountContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: 12,
    borderRadius: 8,
    width: 80,
      alignItems: 'center'
  },
  label: {
    fontSize: 20,
      fontWeight: 'bold'
  },
  date: {
    fontSize: 18
  },
  amount: {
    fontSize: 20,
    color: "white"
  }
});
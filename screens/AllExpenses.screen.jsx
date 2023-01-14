import { Text, View, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../contexts";
import { ExpenseItem, ExpensesTotal } from "../components";

const NoExpenses = () =>
  <View style={styles.noDataContainer}>
    <Text style={styles.noDataText}>No ExpensesAdded</Text>
  </View>;

export const AllExpensesScreen = () => {

  const { expenses } = useContext(ExpensesContext);

  const total = expenses.reduce((total, expense) => total + expense.amount, 0);

  if (!expenses.length) {
    return <NoExpenses />;
  }

  return (
    <View style={styles.screen}>
      <View>
        <ExpensesTotal label="Total" total={total} />
      </View>
      <FlatList data={expenses} renderItem={({ item }) => <ExpenseItem expense={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 8
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noDataText: {
    fontSize: 24
  }
});

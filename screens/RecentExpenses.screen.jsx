import { FlatList, Text, View, StyleSheet } from "react-native";
import { ExpenseItem, ExpensesTotal } from "../components";
import { useContext } from "react";
import { ExpensesContext } from "../contexts";

const NoExpenses = () =>
  <View style={styles.noDataContainer}>
    <Text style={styles.noDataText}>No ExpensesAdded</Text>
  </View>;

export const RecentExpensesScreen = () => {
  const { expenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((_, index) => index < 5);

  const total = recentExpenses.reduce((total, expense) => total + expense.amount, 0);

  if (!expenses.length) {
    return <NoExpenses />;
  }

  return (
    <View style={styles.screen}>
      <View>
        <ExpensesTotal label="Last 7 days" total={total} />
      </View>
      <FlatList data={recentExpenses} renderItem={({ item }) => <ExpenseItem expense={item} />} />
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
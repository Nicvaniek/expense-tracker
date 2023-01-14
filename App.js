import { Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants";
import { AllExpensesScreen, RecentExpensesScreen, TabsScreen } from "./screens";
import { useState } from "react";
import { ExpensesContext } from "./contexts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ManageExpenseScreen } from "./screens/ManageExpense.screen";

const Stack = createNativeStackNavigator();

export default function App() {

  const [expenses, setExpenses] = useState([{
    id: Math.random(),
    title: "Test expense A",
    date: new Date(),
    amount: 300
  }, { id: Math.random(), title: "Test expense B", date: new Date(), amount: 59 }, {
    id: Math.random(),
    title: "Test expense C",
    date: new Date(),
    amount: 150
  }, {
    id: Math.random(),
    title: "Test expense D",
    date: new Date(),
    amount: 32
  }, {
    id: Math.random(),
    title: "Test expense E",
    date: new Date(),
    amount: 11
  }, {
    id: Math.random(),
    title: "Test expense F",
    date: new Date(),
    amount: 965
  }]);

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContext.Provider value={{ expenses, setExpenses }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: Colors.PRIMARY }, headerTintColor: "white" }}>
            <Stack.Screen name="Tabs" component={TabsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ManagementModal" component={ManageExpenseScreen} options={{ presentation: "modal" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({});

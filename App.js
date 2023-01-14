import { Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants";
import { AllExpensesScreen, RecentExpensesScreen } from "./screens";
import { useState } from "react";
import { ExpensesContext } from "./contexts";

const Tab = createBottomTabNavigator();

const getTabIcon =
  (route) =>
    ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Recent") {
        iconName = focused ? "hourglass" : "hourglass-outline";
      } else if (route.name === "All") {
        iconName = focused ? "list" : "list-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    };

export default function App() {

  const [expenses, setExpenses] = useState([{
    title: "Test expense A",
    date: new Date(),
    amount: 300
  }, { title: "Test expense B", date: new Date(), amount: 59 }, {
    title: "Test expense C",
    date: new Date(),
    amount: 150
  }]);

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContext.Provider value={{ expenses, setExpenses }}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="All" // temp
            screenOptions={({ route }) => ({
              tabBarIcon: getTabIcon(route),
              tabBarActiveTintColor: Colors.PRIMARY,
              tabBarInactiveTintColor: "gray",
              headerStyle: {
                backgroundColor: Colors.PRIMARY
              },
              headerTintColor: "white",
              headerRight: () => (
                <Pressable style={styles.addExpenseButton}>
                  <Ionicons color="white" name="add" size={32} />
                </Pressable>
              )
            })}
          >
            <Tab.Screen
              name="Recent"
              component={RecentExpensesScreen}
              options={{
                title: "Recent Expenses"
              }}
            />
            <Tab.Screen
              name="All"
              component={AllExpensesScreen}
              options={{
                title: "All Expenses"
              }}
            />
          </Tab.Navigator
          >
        </NavigationContainer>
      </ExpensesContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  addExpenseButton: {
    marginRight: 18
  }
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";
import { RecentExpensesScreen } from "./RecentExpenses.screen";
import { AllExpensesScreen } from "./AllExpenses.screen";
import { Colors } from "../constants";

const Tabs = createBottomTabNavigator();

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

export const TabsScreen = ({ navigation }) => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: getTabIcon(route),
      tabBarActiveTintColor: Colors.PRIMARY,
      tabBarInactiveTintColor: "gray",
      headerStyle: {
        backgroundColor: Colors.PRIMARY
      },
      headerTintColor: "white",
      headerRight: () => (
        <Pressable style={styles.addExpenseButton} onPress={() => navigation.navigate("ManagementModal")}>
          <Ionicons color="white" name="add" size={32} />
        </Pressable>
      )
    })}
  >
    <Tabs.Screen
      name="Recent"
      component={RecentExpensesScreen}
      options={{
        title: "Recent Expenses"
      }}
    />
    <Tabs.Screen
      name="All"
      component={AllExpensesScreen}
      options={{
        title: "All Expenses"
      }}
    />
  </Tabs.Navigator>
);

const styles = StyleSheet.create({
  addExpenseButton: {
    marginRight: 18
  }
});
import { Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants";
import { AllExpensesScreen, RecentExpensesScreen } from "./screens";

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
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: getTabIcon(route),
            tabBarActiveTintColor: Colors.SECONDARY,
            tabBarInactiveTintColor: "white",
            tabBarActiveBackgroundColor: Colors.PRIMARY,
            tabBarInactiveBackgroundColor: Colors.PRIMARY,
            headerStyle: {
              backgroundColor: Colors.PRIMARY,
            },
            headerTintColor: "white",
            headerRight: () => (
              <Pressable style={styles.addExpenseButton}>
                <Ionicons color="white" name="add" size={32} />
              </Pressable>
            ),
          })}
        >
          <Tab.Screen
            name="Recent"
            component={RecentExpensesScreen}
            options={{
              title: "Recent Expenses",
            }}
          />
          <Tab.Screen
            name="All"
            component={AllExpensesScreen}
            options={{
              title: "All Expenses",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  addExpenseButton: {
    marginRight: 18,
  },
});

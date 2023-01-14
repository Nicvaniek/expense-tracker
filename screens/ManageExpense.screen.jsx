import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";

export const ManageExpenseScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <View style={styles.formContainer}>
      <Text>Form goes here</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <Button variant="SECONDARY" onPress={() => navigation.goBack()}>Cancel</Button>
      <Button variant="PRIMARY">Save</Button>
    </View>
    <View style={styles.divider}></View>
    <Pressable style={{ alignSelf: "center" }}>
      <View>
        <Ionicons name="trash" color="red" size={56} />
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  screen: {},
  formContainer: {},
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  divider: {
    marginVertical: 12,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  }
});
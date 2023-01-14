import { Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants";

export const Button = ({ variant, children, onPress }) => (
  <View style={styles.outerContainer}>
    <Pressable onPress={onPress}
               style={({ pressed }) => pressed ? [styles.pressable, { backgroundColor: Colors[variant] }, styles.buttonPressed] : [styles.pressable, { backgroundColor: Colors[variant] }]}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "flex-start"
  },
  pressable: { borderRadius: 5 },
  innerContainer: {
    padding: 8,
    minWidth: 150
  },
  text: {
    fontSize: 24,
    color: "white",
    alignSelf: "center"
  },
  buttonPressed: {
    opacity: 0.5
  }
});
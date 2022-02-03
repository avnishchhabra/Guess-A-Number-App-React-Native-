import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "open-sans-bold",
  },
});
export default Header;

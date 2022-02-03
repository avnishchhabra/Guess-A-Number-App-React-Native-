import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    color: colors.primary,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
  number: {
    fontSize: 30,
    color: colors.primary,
  },
});

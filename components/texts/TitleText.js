import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.titleText, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});

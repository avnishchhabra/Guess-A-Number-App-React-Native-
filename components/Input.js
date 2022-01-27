import { StyleSheet, Text, View, TextInput } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    height: 40,
  },
});

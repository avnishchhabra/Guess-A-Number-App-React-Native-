import { Text, View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    backgroundColor: "white",
    elevation: 8,
    borderRadius: 16,
  },
});

export default Card;

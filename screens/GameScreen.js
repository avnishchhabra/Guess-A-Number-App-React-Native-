import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumberBw = (mini, maxi, exclude) => {
  const min = Math.ceil(mini);
  const max = Math.floor(maxi);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  console.log("inside", randNum);
  if (randNum === exclude) {
    return generateRandomNumberBw();
  } else {
    return randNum;
  }
};

const GameScreen = (props) => {
  const [randNum, setRandNum] = useState(
    generateRandomNumberBw(1, 100, props.userNum)
  );
  console.log("randdNum", randNum);
  return (
    <View style={styles.screen}>
      <Text>Opponent guess</Text>
      <NumberContainer>{randNum}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="HIGHER" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: "80%",
    padding: 20,
  },
});

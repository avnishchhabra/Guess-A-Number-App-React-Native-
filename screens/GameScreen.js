import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
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

const GameScreen = ({ userNum, onGameOver }) => {
  const [randNum, setRandNum] = useState(
    generateRandomNumberBw(1, 100, userNum)
  );
  const [rounds, setRounds] = useState(0);
  useEffect(() => {
    if (randNum === userNum) {
      onGameOver(rounds);
    }
  }, [randNum, userNum, onGameOver]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const nextNumHandler = (direction) => {
    if (
      (direction === "lower" && randNum < userNum) ||
      (direction === "greater" && randNum > userNum)
    ) {
      Alert.alert("Don't lie!", "", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = randNum;
    }
    if (direction === "greater") {
      currentLow.current = randNum;
    }
    const next = generateRandomNumberBw(
      currentLow.current,
      currentHigh.current,
      randNum
    );
    setRandNum(next);
    setRounds((prevRounds) => prevRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent guess</Text>
      <NumberContainer>{randNum}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={nextNumHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextNumHandler.bind(this, "greater")}
        />
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

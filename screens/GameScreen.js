import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

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
  const initialGuess = generateRandomNumberBw(1, 100, userNum);
  const [randNum, setRandNum] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  useEffect(() => {
    if (randNum === userNum) {
      onGameOver(pastGuesses.length);
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
    // setRounds((prevRounds) => prevRounds + 1);
    setPastGuesses((prevGuesses) => [next, ...prevGuesses]);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent guess</Text>
      <NumberContainer>{randNum}</NumberContainer>
      <Card style={styles.btnContainer}>
        <MainButton onPress={nextNumHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextNumHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {pastGuesses.map((guess, i) => (
            <View key={i} style={styles.listItem}>
              <Text>#{pastGuesses.length - i}</Text>
              <Text>{" " + guess}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  listContainer: {
    width: "100%",
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 17,
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    width: "40%",
  },
});

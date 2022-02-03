import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [rounds, setRounds] = useState(0);
  const startGameHandler = (num) => {
    setUserNum(num);
  };
  const gameOverHandler = (noOfRounds) => {
    setRounds(noOfRounds);
  };
  const newGameHandler = () => {
    setRounds(0);
    setUserNum(null);
  };
  let screen = <StartGame onStart={startGameHandler} />;
  if (userNum && rounds <= 0) {
    screen = <GameScreen onGameOver={gameOverHandler} userNum={userNum} />;
  }
  if (rounds > 0) {
    screen = (
      <GameOver
        number={userNum}
        rounds={rounds}
        onNewGameStart={newGameHandler}
      />
    );
  }
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <Header title="Guess the number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 40,
  },
});

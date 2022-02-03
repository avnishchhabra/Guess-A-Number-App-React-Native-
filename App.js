import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as FONT from "expo-font";
import AppLoading from "expo-app-loading";
import {} from "expo";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";

const fetchFonts = () => {
  return FONT.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNum, setUserNum] = useState();
  const [appLoaded, setAppLoaded] = useState(false);
  const [rounds, setRounds] = useState(0);
  if (!appLoaded) {
    return (
      <AppLoading
        onError={() => console.log("error")}
        startAsync={fetchFonts}
        onFinish={() => setAppLoaded(true)}
      />
    );
  }
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
  screen = <GameOver number={2} rounds={4} onNewGameStart={newGameHandler} />;
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

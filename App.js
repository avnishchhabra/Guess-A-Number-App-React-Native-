import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";

export default function App() {
  const [userNum, setUserNum] = useState();
  let screen = <StartGame onStart={setUserNum} />;
  if (userNum) {
    screen = <GameScreen userNum={userNum} />;
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

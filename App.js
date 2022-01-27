import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screens/StartGame";

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <Header title="Guess the number" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 40,
  },
});

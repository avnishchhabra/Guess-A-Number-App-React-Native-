import { Button, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import TitleText from "../components/texts/TitleText";
import BodyText from "../components/texts/BodyText";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOver = ({ onNewGameStart, rounds, number }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      {/* <Image style={styles.img} source={require("../assets/success.png")} /> */}
      <Image
        style={styles.img}
        fadeDuration={1500}
        source={{
          uri: "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=1024&h=683&fm=webp",
        }}
      />
      <BodyText style={styles.resultText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to find the number <Text style={styles.highlight}>{number}</Text>
      </BodyText>
      <MainButton onPress={onNewGameStart}>Start New Game</MainButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  img: {
    height: 200,
    width: 200,
    marginVertical: 20,
    borderRadius: 150,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary,
  },
});

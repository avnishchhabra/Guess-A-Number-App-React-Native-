import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const StartGame = () => {
  const [input, setInput] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const handleInputChange = (text) => {
    setInput(text.replace(/[^0-9]/g, ""));
  };
  const resetHandler = () => setInput("");
  const confirmHandler = () => {
    const choosenNumber = parseInt(input);
    if (choosenNumber <= 0 || choosenNumber > 99 || isNaN(choosenNumber)) {
      Alert.alert("Enter valid number", "Number must a valid number", [
        { text: "Okay!", onPress: resetHandler },
      ]);
      return;
    }
    setSelectedNum(choosenNumber);
    setInput("");
    setConfirmed(true);
    Keyboard.dismiss();
  };
  let finalOutput;
  if (confirmed) {
    finalOutput = (
      <View style={styles.finalOutput}>
        <Text>Your number</Text>
        <NumberContainer>{selectedNum}</NumberContainer>
        <View style={styles.startBtn}>
          <Button color={colors.primary} title="START GAME" />
        </View>
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.startScreen}>
        <Text style={styles.bigText}>Game Starts!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.bigText}>Enter Number</Text>
          <Input
            value={input}
            onChangeText={handleInputChange}
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
          />
          <View style={styles.btnGroup}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={colors.secondary}
                onPress={() => setInput("")}
              />
            </View>
            <View style={styles.btn}>
              <Button
                color={colors.primary}
                title="Confirm"
                onPress={confirmHandler}
              />
            </View>
          </View>
        </Card>
        {finalOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  bigText: {
    fontSize: 22,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
  },
  input: {
    width: "30%",
    paddingHorizontal: 40,
    textAlign: "center",
  },
  btnGroup: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    padding: 10,
  },
  btn: {
    width: 100,
  },
  finalOutput: {
    marginTop: 15,
    borderWidth: 2,
    padding: 25,
    borderRadius: 8,
    borderColor: colors.secondary,
    alignItems: "center",
  },
  startBtn: {
    marginTop: 15,
  },
});

export default StartGame;

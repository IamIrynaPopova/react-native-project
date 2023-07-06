import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function App() {
  // const [text, onChangeText] = React.useState("");
  // const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/photo_background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.titleText}>Реєстрація</Text>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeText}
              // value={text}
              placeholder="Логін"
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
            />
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleText: {
    marginTop: 92,
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  input: {
    height: 50,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
  },
});

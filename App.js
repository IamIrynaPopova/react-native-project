import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = React.useState(false);
  const [formHeight, setFormHeight] = React.useState(549);
  console.log(isShowKeyboard);
  console.log(formHeight);
  React.useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
        setFormHeight(549);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  const d = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/photo_background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              height: formHeight,
            }}
          >
            <Text style={styles.titleText}>Реєстрація</Text>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setFormHeight(631);
                }}
                placeholder="Логін"
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setFormHeight(631);
                }}
                placeholder="Адреса електронної пошти"
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setFormHeight(631);
                }}
                placeholder="Пароль"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.titleButton}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
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
  button: {
    marginTop: 43,
    paddingLeft: 32,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  titleButton: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
  text: {
    marginTop: 16,
    marginBottom: 66,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
});

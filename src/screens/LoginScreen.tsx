import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import GradientBackground from "../components/organisms/GradientBackground";
import Button from "../components/molecules/Button";
import Input from "../components/molecules/Input";
import LoginContent from "../components/molecules/LoginContent";
import InputTitle from "../components/molecules/InputTitle";
import Logo from "../components/molecules/Logo";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Logo />
        <LoginContent
          title="Login"
          subTitle="Please enter Your information below order to login to your account.  "
        />

        <InputTitle title="Email" />
        <Input
          placeHolder="Enter Email"
          iconPath={require("../assets/message.png")}
        />

        <InputTitle title="Password" />
        <Input
          placeHolder="Enter Password"
          secureTextEntry={true}
          iconPath={require("../assets/lock.png")}
        />

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button title="Login" onPress={() => navigation.navigate("OTP")} />
      </View>
    </GradientBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#212121",
    fontSize: 14,
    fontWeight: "600",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface LoginContentProps {
  title?: string;
  subTitle?: string;
}

const LoginContent: React.FC<LoginContentProps> = (props) => {
  const { title = "Welcome Back 👋", subTitle = "Login to your account" } =
    props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};

export default LoginContent;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#212121",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B7280",
    marginBottom: 20,
    marginTop: 5,
    width: "90%",
  },
});

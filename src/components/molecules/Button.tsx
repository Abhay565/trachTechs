import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, GestureResponderEvent } from "react-native";

interface ButtonProps {
  title: string; // Button text
  onPress?: (event: GestureResponderEvent) => void; // Optional click handler
  backgroundColor?: string; // Optional custom background color
  textColor?: string; // Optional custom text color
  disabled?: boolean; // Optional disabled state
}

const Button: React.FC<ButtonProps> = ({
  title = "Login",
  onPress = () => {},
  backgroundColor = "#FFD700",
  textColor = "#000",
  disabled = false,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: disabled ? "#ccc" : backgroundColor }]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#212121"
  },
});

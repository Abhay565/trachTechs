import { StyleSheet, TextInput, View, Image } from "react-native";
import React from "react";

interface InputProps {
  placeHolder: string;
  secureTextEntry?: boolean;
  iconPath?: any; // local image path or require()
}

const Input: React.FC<InputProps> = (props) => {
  const { placeHolder = "Enter Email", secureTextEntry = false, iconPath } = props;

  return (
    <View style={styles.inputContainer}>
      {iconPath && <Image source={iconPath} style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 50,
    backgroundColor: "#fff",
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 4
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

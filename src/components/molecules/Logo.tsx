import React from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";

// ✅ Props interface
interface LogoProps {
  width?: number; // You can control the width dynamically
  height?: number; // You can control the height dynamically
  size?: number; // You can control the size dynamically
  source?: ImageSourcePropType; // Optional custom logo
  style?: object; // Extra styles if needed
}

const Logo: React.FC<LogoProps> = ({
  height= 100,
  width= 150,
  source = require("../../assets/logo.png"),
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, { width: width, height: height }]} source={source} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
  },
});

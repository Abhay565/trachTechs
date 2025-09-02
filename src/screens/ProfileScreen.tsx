import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientBackground from "../components/organisms/GradientBackground";

const ProfileScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

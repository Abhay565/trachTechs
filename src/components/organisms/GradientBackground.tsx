import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={["#f3f3e5ff", "#f4da8dff"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default GradientBackground;

import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/molecules/Header";
import SearchBar from "../components/molecules/SearchBar";
import DeliveryCard from "../components/molecules/DeliveryCard";
import PickupRequests from "../components/molecules/PickupRequests";
import QuickActions from "../components/molecules/QuickActions";
import GradientBackground from "../components/organisms/GradientBackground";
import Input from "../components/molecules/Input";

const HomeScreen = () => {
  return (
    <GradientBackground>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header />
        <Input
          placeHolder="Search AWB..."
          iconPath={require("../assets/search.png")}
        />
        <DeliveryCard />
        <PickupRequests />
        <QuickActions />
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 100,
  },
});

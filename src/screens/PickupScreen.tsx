import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientBackground from "../components/organisms/GradientBackground";

interface PickupItem {
  id: string;
  title: string;
  status: string;
  awb: string;
}

const pickupData: PickupItem[] = [
  { id: "1", title: "Pickup #5468454654A8", status: "Collected", awb: "AWB5468454654A8" },
  { id: "2", title: "Pickup #8468454654A9", status: "Pending", awb: "AWB8468454654A9" },
  { id: "3", title: "Pickup #3468454654A7", status: "Verified", awb: "AWB3468454654A7" },
  { id: "6", title: "Pickup #6468454654C9", status: "Verified", awb: "AWB6468454654C9" },
];

const PickupScreen = () => {
  const renderItem = ({ item }: { item: PickupItem }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.pickupTitle} numberOfLines={2}>{item.title}</Text>
        <Ionicons name="arrow-forward-circle" size={24} color="#FFBF00" />
      </View>
      <Text style={styles.awb}>AWB: {item.awb}</Text>
      <View style={styles.footer}>
        <Text
          style={[
            styles.status,
            item.status === "Collected"
              ? styles.collected
              : item.status === "Verified"
              ? styles.verified
              : styles.pending,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <GradientBackground>
      <View style={styles.container}>
        <FlatList
          data={pickupData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </GradientBackground>
  );
};

export default PickupScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  pickupTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F1F39",
    flexShrink: 1,
  },
  awb: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  status: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
  },
  collected: {
    backgroundColor: "#4CAF50",
  },
  verified: {
    backgroundColor: "#2196F3",
  },
  pending: {
    backgroundColor: "#FFC107",
  },
});

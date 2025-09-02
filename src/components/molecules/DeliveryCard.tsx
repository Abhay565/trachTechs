import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DeliveryCard = () => {
  const stats = [
    { label: "Picked", number: 10, icon: "checkmark-circle" },
    { label: "Delivered", number: 20, icon: "cube" },
    { label: "Not Delivered", number: 0, icon: "close-circle" },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Out for Delivery</Text>
      <Text style={styles.date}>May 10, 2025</Text>

      <View style={styles.stats}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.stat}>
            <Text style={styles.label}>{stat.label}</Text>
            <View style={styles.iconRow}>
              <Ionicons name={stat.icon as any} size={20} color="#1F1F39" />
              <Text style={styles.number}>{stat.number}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DeliveryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFD700",
    padding: 16,
    borderRadius: 16,
    marginTop: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212121",
  },
  date: {
    fontSize: 14,
    fontWeight: "400",
    color: "#212121",
    marginVertical: 8,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  stat: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    width: 75,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  number: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1F1F39",
    marginLeft: 6,
  },
  label: {
    fontSize: 10,
    fontWeight: "500",
    color: "#555",
    marginBottom: 4,
    textAlign: "left",
    width: "100%"
  },
});

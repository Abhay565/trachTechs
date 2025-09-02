import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const actions = [
  { id: 1, name: "Pickup", icon: "cube" },
  { id: 2, name: "Swap", icon: "swap-horizontal" },
  { id: 3, name: "Travel", icon: "airplane" },
  { id: 4, name: "Verify", icon: "checkmark-done" },
  { id: 5, name: "Wallet", icon: "wallet" },
  { id: 6, name: "Orders", icon: "receipt" },
  { id: 7, name: "Support", icon: "help-circle" },
  { id: 8, name: "Settings", icon: "settings" },
];

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.actions}>
        {actions.map((action) => (
          <TouchableOpacity key={action.id} style={styles.iconBox}>
            <Ionicons name={action.icon} size={24} color="#212121" />
            <Text style={styles.label}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F1F39",
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBox: {
    backgroundColor: "#fff",
    width: "23%",
    marginBottom: 15,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 50,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  label: {
    fontSize: 12,
    color: "#212121",
    marginTop: 6,
    textAlign: "center",
  },
});

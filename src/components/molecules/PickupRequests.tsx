import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PickupRequests = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Pickup Requests</Text>
      <Text style={styles.date}>By May 10 2025</Text>
      <View style={styles.stats}>
        <View style={styles.stat}><Text style={styles.number}>4</Text><Text>Pending</Text></View>
        <View style={styles.stat}><Text style={styles.number}>6</Text><Text>Completed</Text></View>
        <View style={styles.stat}><Text style={styles.number}>600</Text><Text>Shipments</Text></View>
      </View>
    </View>
  );
};

export default PickupRequests;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginTop: 15,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#1F1F39" },
  date: { fontSize: 12, color: "#212121", marginVertical: 5 },
  stats: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  stat: { alignItems: "center" },
  number: { fontWeight: "bold", fontSize: 16, color: "#1F1F39" },
});

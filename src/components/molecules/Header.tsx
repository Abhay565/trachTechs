import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Salman</Text>
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.touchButton}
          onPress={() => console.log("Notifications pressed")}
        >
          <Image
            source={require("../../assets/bell.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchButton, { flexDirection: "row", gap: 5 }]}
          onPress={() => console.log("Notifications pressed")}
        >
            <Text style={{fontSize:12,fontWeight:"500",color:"#212121"}}>1500 SAR</Text>
          <Image
            source={require("../../assets/wallet.png")}
            style={styles.wallet}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 6,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  touchButton: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
  },
  avatar: { width: 45, height: 45, borderRadius: 25 },
  name: { fontSize: 20, fontWeight: "500", color: "#1F1F39" },
  icon: { width: 24, height: 24 },
  wallet:{
    width:20, height:20
  }
});

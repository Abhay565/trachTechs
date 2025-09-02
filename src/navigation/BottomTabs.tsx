import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PickupScreen from "../screens/PickupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DRSMapScreen from "../screens/DRSMapScreen"; // 5th screen

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Pickup":
                iconName = "cube";
                break;
              case "DRSMap":
                iconName = "map";
                break;
              case "Profile":
                iconName = "person";
                break;
              case "Settings":
                iconName = "settings";
                break;
              default:
                iconName = "ellipse";
            }
       
            const isMiddle = route.name === "DRSMap";

            return (
              <View
                 style={[
                  styles.iconContainer,
                  isMiddle
                    ? styles.middleTab
                    : focused
                    ? styles.activeIconContainer
                    : styles.inactiveIconContainer,
                  focused && !isMiddle && styles.liftedIcon,
                ]}
              >
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? "#fff" : "#FFD"}
                />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pickup" component={PickupScreen} />
        <Tab.Screen name="DRSMap" component={DRSMapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#212121",
  },
  tabBar: {
    position: "absolute",
    bottom: 60,
    left: 20,
    right: 20,
    height: 65,
    backgroundColor: "#212121",
    marginHorizontal: 14,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingTop: 12
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  activeIconContainer: {
    backgroundColor: "#6c6969ff",
    borderRadius: 25,
  },
  middleTab: {
    backgroundColor: "#f8d50eff",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 8,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  liftedIcon: {
    // transform: [{ translateY: -8 }],
  },
});

export default BottomTabs;

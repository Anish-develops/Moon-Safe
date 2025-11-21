import React from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NavigationBar() {
  return (
    <View style={styles.nav}>
  {/* LEFT SECTION */}
  <View style={styles.leftSection}>
    <Image
    source={require("../assets/assets/image.png")}
    style={styles.logo}
    />
    <Text style={styles.brand}>MoonSafe</Text>
  </View>

      {/* RIGHT */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="user" size={28} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="settings" size={22} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.6,
    borderBottomColor: "#e6b9cc",
    backgroundColor: "#FFDDE8",
  },

  leftSection: { flexDirection: "row", alignItems: "center" },

  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3b2a36",
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBtn: {
    padding: 8,
    marginLeft: 10,
  },
  logo: {
  width: 30,
  height: 30,
  marginRight: 10,
  resizeMode: "contain",
},

});

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Href } from "expo-router";
export default function BottomNav() {
  return (
    <View style={styles.container}>
      
      {/* Safe World */}
      <Link href="/world" asChild>
        <TouchableOpacity style={styles.iconBox}>
          <Entypo name="globe" size={26} color="rgba(202, 114, 176, 1)" />
          <Text style={styles.label}>SafeWorld</Text>
        </TouchableOpacity>
      </Link>

      {/* Audio Recording */}
      <Link href="/audiorecording" asChild>
        <TouchableOpacity style={styles.iconBox}>
          <Feather name="mic" size={26} color="rgba(202, 114, 176, 1)" />
          <Text style={styles.label}>Records</Text>
        </TouchableOpacity>
      </Link>

      {/* Location Sharing */}
      <Link href="/location" asChild>
        <TouchableOpacity style={styles.iconBox}>
          <Entypo name="location-pin" size={26} color="rgba(202, 114, 176, 1)" />
          <Text style={styles.label}>Location</Text>
        </TouchableOpacity>
      </Link>

      {/* Help */}
      <Link href="/help" asChild>
        <TouchableOpacity style={styles.iconBox}>
          <Feather name="help-circle" size={26} color="rgba(202, 114, 176, 1)" />
          <Text style={styles.label}>Help</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 70,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  iconBox: {
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 12,
    marginTop: 4,
    color: "#333",
    fontWeight: "500",
  },
});
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HelpScreen() {

  const router = useRouter();  

  return (
    <View style={styles.container}>
      

      <TouchableOpacity style={styles.helpCircle}>
        <Text style={styles.helpText}>Help</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.safeBtn}
        onPress={() => router.push("/world")}   
      >
        <Text style={styles.safeBtnText}>Yes, I'm safe now</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",   
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  helpCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#FF4B4B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },

  helpText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  safeBtn: {
    backgroundColor: "#FFD4E5",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#000",
  },
  safeBtnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});

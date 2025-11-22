import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavigationBar from "../app/Navigationbar";
import BottomNav from "../app/bottom";
import { AntDesign, Feather } from "@expo/vector-icons";

const recordings = [
  {
    id: "1",
    title: "Evidence_001",
    duration: "00:45",
    size: "2.1 MB",
    date: "11/19/2025",
  },
  {
    id: "2",
    title: "Evidence_002",
    duration: "02:00",
    size: "5.5 MB",
    date: "11/18/2025",
  },
  {
    id: "3",
    title: "Evidence_003",
    duration: "01:15",
    size: "3.9 MB",
    date: "11/17/2025",
  },
];

export default function AudioRecording() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFE8EF" }}>
      <NavigationBar />

      {/* This scrolls ENTIRE page */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 160  , }}
      >
        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.title}>Audio recording</Text>
        </View>

        {/* Important Notes Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoHeading}>Important Notes:</Text>
          <Text style={styles.infoText}>• Recordings are stored securely on your device</Text>
          <Text style={styles.infoText}>• Enable background recording for emergency use</Text>
          <Text style={styles.infoText}>• Recordings can be used as legal evidence</Text>
          <Text style={styles.infoText}>• Upload to cloud for backup & sharing with authorities</Text>
        </View>

        {/* Saved Recordings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Saved Recordings ({recordings.length})
          </Text>

          {/* Map recordings manually → scrolls smoothly */}
          {recordings.map((item) => (
            <View key={item.id} style={styles.recordCard}>
              <View>
                <Text style={styles.recordTitle}>{item.title}</Text>
                <Text style={styles.recordMeta}>
                  {item.duration} • {item.size} • {item.date}
                </Text>
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity>
                  <AntDesign name="playcircleo" size={22} color="#444" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather name="download" size={22} color="#444" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather name="trash-2" size={22} color="#b00020" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Bottom Nav */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 16 },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#C2185B",
  },

  infoBox: {
    backgroundColor: "#FFF7D1",
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 12,
  },
  infoHeading: { fontWeight: "700", fontSize: 16, marginBottom: 6,color: "#db1616ff" },
  infoText: { fontSize: 14, marginVertical: 2, color: "#db1616ff" },

  section: { marginTop: 20, marginHorizontal: 16 },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 10 },

  recordCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },
  recordTitle: { fontSize: 15, fontWeight: "700" },
  recordMeta: { fontSize: 12, color: "#666", marginTop: 4 },

  actionRow: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
});
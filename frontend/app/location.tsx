import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import NavigationBar from "../app/Navigationbar";
import BottomNav from "../app/bottom";
import { Feather, Entypo } from "@expo/vector-icons";

const contacts = [
  { id: "1", name: "Mom", number: "+91 98765 43210" },
  { id: "2", name: "Dad", number: "+91 87654 32109" },
  { id: "3", name: "Brother", number: "+91 76543 21908" },
  { id: "4", name: "Best friend", number: "+91 98304 67321" },
];

export default function LocationScreen() {
  const renderContact = ({ item }) => (
    <View style={styles.contactCard}>
      <View style={styles.iconCircle}>
        <Text style={styles.iconLetter}>{item.name[0]}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>

      <View style={styles.rightSide}>
        <Feather name="check-circle" size={20} color="#4CAF50" />
        <View style={styles.deliveredBox}>
          <Text style={styles.deliveredText}>delivered</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FFE8EF" }}>
      <NavigationBar />

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 160 }}
      >
        {/* Current Location Box */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Entypo name="location-pin" size={20} color="#4A4A4A" />
            <Text style={styles.locationTitle}>Current Location</Text>
          </View>

          <Text style={styles.address}>
            Connaught Place, New Delhi, Delhi 110001, India
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.shareOnceBtn}>
              <Text style={styles.shareOnceText}>Share Once</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continuousBtn}>
              <Text style={styles.continuousText}>Continuous Sharing</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Emergency Contacts */}
        <View style={styles.contactSection}>
          <View style={styles.sectionHeader}>
            <Feather name="users" size={18} color="#4A4A4A" />
            <Text style={styles.sectionTitle}>
              Emergency Contacts ({contacts.length})
            </Text>
          </View>

          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={renderContact}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            scrollEnabled={false} // Important for using inside ScrollView
          />
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  locationCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
  },
  locationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationTitle: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "600",
  },
  address: {
    backgroundColor: "#E8F0FE",
    padding: 12,
    borderRadius: 10,
    fontSize: 14,
    color: "#333",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "space-between",
  },
  shareOnceBtn: {
    backgroundColor: "#FF5FA2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  shareOnceText: {
    color: "#fff",
    fontWeight: "600",
  },
  continuousBtn: {
    backgroundColor: "#FFF1F6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  continuousText: {
    color: "#333",
    fontWeight: "600",
  },

  contactSection: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "600",
  },

  contactCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconLetter: {
    fontSize: 18,
    fontWeight: "700",
    color: "#555",
  },
  contactName: {
    fontSize: 15,
    fontWeight: "700",
  },
  contactNumber: {
    fontSize: 13,
    color: "#555",
  },

  rightSide: {
    alignItems: "center",
  },
  deliveredBox: {
    backgroundColor: "#FFD6E7",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 4,
  },
  deliveredText: {
    fontSize: 12,
    color: "#C2185B",
    fontWeight: "600",
  },
});
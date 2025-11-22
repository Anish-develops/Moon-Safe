import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch as RNSwitch,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SettingsPage({
  onGoBack,
}: {
  onGoBack?: () => void;
}) 
 {
  const [voiceActivation, setVoiceActivation] = useState(true);
  const [autoLocation, setAutoLocation] = useState(true);
  const [audioRecording, setAudioRecording] = useState(true);
  const [vibrationAlerts, setVibrationAlerts] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [pin, setPin] = useState("");

  const bgStart = "#F7F8FA";
  const bgEnd = "#FFFFFF";
  const primary = "#005CFF";
  const deep = "#2D3A58";
  const muted = "#6B7280"; // neutral grey

  // Small helper for row text color depending on theme
  const textColor = "#fde5ecf"; // deep
const secondaryColor = "rgba(253, 229, 236,0.6)";


  return (
    <View style={styles.root}>

      {/* Content (single continuous list; rendered inside the main page ScrollView) */}
      <View>
        <View style={styles.item}>
          <View style={styles.itemText}>
            <Text style={[styles.itemTitle, { color: textColor }]}>Voice Activation</Text>
            <Text style={[styles.itemSubtitle, { color: secondaryColor }]}>Trigger SOS with voice command</Text>
          </View>
          <RNSwitch
            value={voiceActivation}
            onValueChange={setVoiceActivation}
            trackColor={{ false: "#E5E7EB", true: primary }}
            thumbColor={voiceActivation ? "#fff" : "#fff"}
          />
        </View>


        <View style={styles.item}>
          <View style={styles.itemText}>
            <Text style={[styles.itemTitle, { color: textColor }]}>Audio Recording</Text>
            <Text style={[styles.itemSubtitle, { color: secondaryColor }]}>Record audio during distress</Text>
          </View>
          <RNSwitch
            value={audioRecording}
            onValueChange={setAudioRecording}
            trackColor={{ false: "#E5E7EB", true: primary }}
            thumbColor={audioRecording ? "#fff" : "#fff"}
          />
        </View>

        <View style={styles.item}>
          <View style={styles.itemText}>
            <Text style={[styles.itemTitle, { color: textColor }]}>Vibration Alerts</Text>
            <Text style={[styles.itemSubtitle, { color: secondaryColor }]}>Silent emergency notifications</Text>
          </View>
          <RNSwitch
            value={vibrationAlerts}
            onValueChange={setVibrationAlerts}
            trackColor={{ false: "#E5E7EB", true: primary }}
            thumbColor={vibrationAlerts ? "#fff" : "#fff"}
          />
        </View>

        <View style={[styles.item, styles.pinItem]}>
          <View style={styles.itemText}>
            <Text style={[styles.itemTitle, { color: textColor }]}>Emergency PIN</Text>
            <Text style={[styles.itemSubtitle, { color: secondaryColor }]}>4-digit PIN to cancel false alarms</Text>
          </View>
          <TextInput
            value={pin}
            onChangeText={setPin}
            style={styles.pinInputLight}
            placeholder="••••"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            secureTextEntry
            maxLength={4}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.itemText}>
            <Text style={[styles.itemTitle, { color: textColor }]}>Push Notifications</Text>
            <Text style={[styles.itemSubtitle, { color: secondaryColor }]}>Get alerts and updates</Text>
          </View>
          <RNSwitch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: "#E5E7EB", true: primary }}
            thumbColor={pushNotifications ? "#fff" : "#fff"}
          />
        </View>

        <TouchableOpacity style={[styles.linkItem, styles.lastItem]} onPress={() => {}}>
          <Text style={[styles.linkText, { color: deep }]}>Privacy & Security</Text>
          <Text style={[styles.chev, { color: muted }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem} onPress={() => {}}>
          <Text style={[styles.linkText, { color: deep }]}>Help & Support</Text>
          <Text style={[styles.chev, { color: muted }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkItem} onPress={() => {}}>
          <Text style={[styles.linkText, { color: deep }]}>About MoonSafe</Text>
          <Text style={[styles.chev, { color: muted }]}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const SECTION_SPACING = 22;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F7F8FA",
  },
  gradientTop: {
    height: 70,
    width: "100%",
  },
  gradientBottom: {
    height: 0,
    width: "100%",
  },
  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  headerSide: {
    width: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    width: 20,
    alignItems: "flex-end",
  },
  bar: {
    height: 2,
    backgroundColor: "#374151",
    borderRadius: 2,
    marginVertical: 2,
    width: 20,
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    marginBottom: 20,
  },
  itemText: {
    flex: 1,
    paddingRight: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemSubtitle: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 4,
    opacity: 0.6,
  },
  pinItem: {
    paddingBottom: 6,
  },
  pinInputLight: {
    width: 88,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E9EE",
    textAlign: "center",
    color: "#111827",
    backgroundColor: "#fdd6e1ff",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(16,24,40,0.06)",
    marginVertical: SECTION_SPACING,
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(16,24,40,0.04)",
  },
  linkText: {
    fontSize: 16,
    fontWeight: "500",
  },
  chev: {
    fontSize: 22,
    lineHeight: 22,
  },
  lastItem: {
    marginBottom: 40,
  },
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
});

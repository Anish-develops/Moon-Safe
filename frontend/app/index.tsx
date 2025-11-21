import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.tagline}>Empower. Alert. Stay Safe.</Text>
                <Text style={styles.title}>Moon Safe</Text>
                <Text style={styles.subtitle}>
                    Configure trusted contacts, trigger SOS alerts, and share
                    real-time details directly from your phone.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#081426",
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 16,
    },
    tagline: {
        color: "#7FD1FF",
        fontSize: 14,
        letterSpacing: 1.5,
        textTransform: "uppercase",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 40,
        fontWeight: "700",
    },
    subtitle: {
        color: "#C8D3E0",
        fontSize: 16,
        lineHeight: 22,
    },
});

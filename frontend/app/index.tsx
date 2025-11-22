import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
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

                <Link href="/audiorecording" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Go to Recording Page
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#081426",
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    container: {
        flex: 1,
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
    button: {
        backgroundColor: "pink",
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    secondaryButton: {
        backgroundColor: "#12223D",
        padding: 16,
        borderRadius: 10,
    },
    secondaryButtonText: {
        color: "#7FD1FF",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },
    statusWrapper: {
        gap: 4,
    },
    label: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    success: {
        color: "#9BE7A0",
    },
    error: {
        color: "#FF6B6B",
    },
});

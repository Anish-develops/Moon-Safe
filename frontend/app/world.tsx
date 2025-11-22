import React, { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const girlIllustration = require("../assets/girl-image.png");

export default function WorldScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleAdd = () => {
        if (!name.trim() || !phone.trim()) {
            Alert.alert("Missing info", "Name and phone number are required.");
            return;
        }

        setModalVisible(false);
        setName("");
        setPhone("");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.heroCard}>
                    <View style={styles.copyBlock}>
                        <Text style={styles.title}>Make your world safe</Text>
                        <Text style={styles.subtitle}>
                            Keep trusted people informed with one tap. Share a
                            quick update whenever you feel uneasy.
                        </Text>
                    </View>

                    <Image
                        source={girlIllustration}
                        style={styles.heroImage}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.helperText}>
                    Ready when you are — add your details and alert the world.
                </Text>

                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.primaryCta}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.primaryCtaText}>
                        make your safe world
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackdrop}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : undefined}
                        style={styles.modalCard}
                    >
                        <Text style={styles.modalTitle}>
                            Share your details
                        </Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Priya Sharma"
                                placeholderTextColor="#6b6b6b"
                                autoCapitalize="words"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Phone number</Text>
                            <TextInput
                                style={styles.input}
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="+91 9876543210"
                                placeholderTextColor="#6b6b6b"
                                keyboardType="phone-pad"
                            />
                        </View>

                        <View style={styles.actions}>
                            <TouchableOpacity
                                style={[
                                    styles.actionButton,
                                    styles.cancelButton,
                                ]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.actionButton, styles.addButton]}
                                onPress={handleAdd}
                            >
                                <Text style={styles.addText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fdf2ff",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    heroCard: {
        backgroundColor: "#ffffff",
        borderRadius: 28,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 5,
    },
    copyBlock: {
        flex: 1,
        paddingRight: 12,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#2d1b3c",
    },
    subtitle: {
        marginTop: 8,
        color: "#5c4b73",
        lineHeight: 20,
    },
    heroImage: {
        width: 140,
        height: 160,
    },
    helperText: {
        marginTop: 24,
        fontSize: 14,
        color: "#6b5c7d",
        textAlign: "center",
    },
    primaryCta: {
        marginTop: 24,
        backgroundColor: "#f472b6",
        borderRadius: 28,
        paddingVertical: 18,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
        elevation: 6,
    },
    primaryCtaText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        textTransform: "capitalize",
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    modalCard: {
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: "#f8d8ff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 8,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#2d1b3c",
        marginBottom: 16,
    },
    inputGroup: {
        marginBottom: 12,
    },
    label: {
        color: "#6b4c7a",
        marginBottom: 6,
        fontSize: 13,
        fontWeight: "600",
    },
    input: {
        borderWidth: 1,
        borderColor: "#f3d1ff",
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        color: "#2d1b3c",
        fontSize: 15,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 8,
    },
    actionButton: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 12,
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: "#f3d1ff",
        marginRight: 12,
    },
    addButton: {
        backgroundColor: "#f472b6",
    },
    cancelText: {
        color: "#7a5c91",
        fontWeight: "600",
    },
    addText: {
        color: "#fff",
        fontWeight: "700",
    },
});

// // app/TherapyCard.tsx
// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// type TherapyType = {
//   title: string;
//   description: string;
//   actionLabel: string;
//   actionLink?: string; // Optional URL
// };

// type Props = {
//   therapy: TherapyType;
// };

// const TherapyCard: React.FC<Props> = ({ therapy }) => {
//   const handlePress = () => {
//     if (therapy.actionLink) {
//       Linking.openURL(therapy.actionLink);
//     }
//   };

//   return (
//     <View style={styles.card}>
//       <View style={styles.row}>
//         <MaterialIcons name="local-hospital" size={20} color="#4a90e2" />
//         <Text style={styles.title}>{therapy.title}</Text>
//       </View>
//       <Text style={styles.description}>{therapy.description}</Text>
//       <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
//         <Text style={styles.buttonText}>{therapy.actionLabel}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TherapyCard;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 6,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 8,
//     color: "#333",
//   },
//   description: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 12,
//   },
//   button: {
//     backgroundColor: "#4a90e2",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 20,
//     alignSelf: "flex-start",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });











import { TherapyType } from "./TherapyCard";

export const therapies: TherapyType[] = [
  {
    title: "Online Counselling Session",
    description: "Connect with certified therapists via video or chat sessions.",
    actionLabel: "Join Session",
    actionLink: "https://example.com/online-counselling",
  },
  {
    title: "Mental Health Resources",
    description: "Access articles, guides, and exercises to improve mental wellness.",
    actionLabel: "Open Resources",
    actionLink: "https://example.com/mental-resources",
  },
  {
    title: "Stress Management Tips",
    description: "Learn techniques and exercises to manage stress effectively.",
    actionLabel: "View Tips",
    actionLink: "https://example.com/stress-tips",
  },
];


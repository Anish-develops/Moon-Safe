// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

// // Export the type so it can be imported in other files
// export type LawyerType = {
//   name: string;
//   experience: string;
//   location: string;
//   fee: string;
//   languages: string[];
//   rating: number;
//   phone: string;
//   email: string;
//   avatar: string; // image url or local asset
// };

// type Props = {
//   lawyer: LawyerType;
// };

// const LawyerCard: React.FC<Props> = ({ lawyer }) => {
//   const callLawyer = () => Linking.openURL(`tel:${lawyer.phone}`);
//   const emailLawyer = () => Linking.openURL(`mailto:${lawyer.email}`);

//   return (
//     <View style={styles.card}>
//       <View style={styles.row}>
//         <Image source={{ uri: lawyer.avatar }} style={styles.avatar} />
//         <Text style={styles.name}>{lawyer.name}</Text>
//       </View>

//       <View style={styles.row}>
//         <MaterialIcons name="work-outline" size={16} color="#555" />
//         <Text style={styles.text}>{lawyer.experience}</Text>
//       </View>
//       <View style={styles.row}>
//         <MaterialIcons name="location-on" size={16} color="#555" />
//         <Text style={styles.text}>{lawyer.location}</Text>
//       </View>
//       <View style={styles.row}>
//         <MaterialIcons name="attach-money" size={16} color="#555" />
//         <Text style={styles.text}>{lawyer.fee}</Text>
//       </View>
//       <View style={styles.row}>
//         <FontAwesome name="language" size={16} color="#555" />
//         <Text style={styles.text}>{lawyer.languages.join(", ")}</Text>
//       </View>
//       <View style={styles.row}>
//         <FontAwesome name="star" size={16} color="#f5b50a" />
//         <Text style={styles.text}>{lawyer.rating} / 5</Text>
//       </View>

//       {/* Contact Buttons */}
//       <View style={styles.contactRow}>
//         <TouchableOpacity style={styles.contactBtn} onPress={callLawyer}>
//           <Text style={styles.contactText}>Call</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.contactBtn} onPress={emailLawyer}>
//           <Text style={styles.contactText}>Email</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LawyerCard;

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
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 12,
//   },
//   text: {
//     fontSize: 14,
//     color: "#333",
//     marginLeft: 6,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   contactRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 12,
//   },
//   contactBtn: {
//     backgroundColor: "#4a90e2",
//     paddingVertical: 6,
//     paddingHorizontal: 16,
//     borderRadius: 20,
//   },
//   contactText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });



















import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Export the type so other files can use it
export type TherapyType = {
  title: string;
  description: string;
  actionLabel: string;
  actionLink?: string; // Optional URL
};

type Props = {
  therapy: TherapyType;
};

const TherapyCard: React.FC<Props> = ({ therapy }) => {
  const handlePress = () => {
    if (therapy.actionLink) {
      Linking.openURL(therapy.actionLink);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <MaterialIcons name="local-hospital" size={20} color="#4a90e2" />
        <Text style={styles.title}>{therapy.title}</Text>
      </View>
      <Text style={styles.description}>{therapy.description}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{therapy.actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TherapyCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});


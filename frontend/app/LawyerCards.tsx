// // app/LawyerCards.tsx
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Icons for info

// export type LawyerType = {
//   name: string;
//   experience: string;
//   location: string;
//   fee: string;
//   languages: string[];
//   rating: number; // out of 5
// };

// type Props = {
//   lawyer: LawyerType;
// };

// const LawyerCard: React.FC<Props> = ({ lawyer }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.name}>{lawyer.name}</Text>
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
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 4,
//   },
//   text: {
//     fontSize: 14,
//     color: "#333",
//     marginLeft: 6,
//   },
// });
























import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export type LawyerType = {
  name: string;
  experience: string;
  location: string;
  fee: string;
  languages: string[];
  rating: number;
  phone: string;
  email: string;
  avatar: string; // image url or local asset
};

type Props = {
  lawyer: LawyerType;
};

const LawyerCard: React.FC<Props> = ({ lawyer }) => {

  const callLawyer = () => {
    Linking.openURL(`tel:${lawyer.phone}`);
  };

  const emailLawyer = () => {
    Linking.openURL(`mailto:${lawyer.email}`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: lawyer.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{lawyer.name}</Text>
      </View>

      <View style={styles.row}>
        <MaterialIcons name="work-outline" size={16} color="#555" />
        <Text style={styles.text}>{lawyer.experience}</Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons name="location-on" size={16} color="#555" />
        <Text style={styles.text}>{lawyer.location}</Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons name="attach-money" size={16} color="#555" />
        <Text style={styles.text}>{lawyer.fee}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome name="language" size={16} color="#555" />
        <Text style={styles.text}>{lawyer.languages.join(", ")}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome name="star" size={16} color="#f5b50a" />
        <Text style={styles.text}>{lawyer.rating} / 5</Text>
      </View>

      {/* Contact Buttons */}
      <View style={styles.contactRow}>
        <TouchableOpacity style={styles.contactBtn} onPress={callLawyer}>
          <Text style={styles.contactText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactBtn} onPress={emailLawyer}>
          <Text style={styles.contactText}>Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LawyerCard;

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
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginLeft: 6,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  contactBtn: {
    backgroundColor: "#4a90e2",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  contactText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
};

const NGOCard: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

export default NGOCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f0f0ff",
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
});

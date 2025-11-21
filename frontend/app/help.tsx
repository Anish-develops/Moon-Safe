
// import React, { useState, useRef, useEffect } from "react";
// import {
  // View,
  // Text,
  // TouchableOpacity,
  // ScrollView,
  // StyleSheet,
  // Dimensions,
  // Animated,
// } from "react-native";
// 
// import LawyerCard from "./LawyerCards";
// import { lawyers } from "./LawyerData";
// import TherapyCard from "./TherapyCard";
// // import { therapies } from "./TherapyData";
// 
// // const { width } = Dimensions.get("window");
// 
// // type SectionType = "Legal Aid" | "Therapy" | "NGO Support";
// 
// const Help = () => {
  // // // const [activeSection, setActiveSection] = useState<SectionType>("Legal Aid");
// 
  // // // const sections: SectionType[] = ["Legal Aid", "Therapy", "NGO Support"];
// 
  // // const content: Record<SectionType, string[]> = {
    // // "Legal Aid": [], // handled with LawyerCards
    // // Therapy: [], // handled with TherapyCard
    // "NGO Support": [
      // "Find local NGOs",
      // "Volunteer opportunities",
      // "Charity programs",
    // ],
  // };
// 
  // Animated sliding indicator
  // // const indicatorAnim = useRef(new Animated.Value(0)).current;
  // // const buttonWidth = (width - 64) / sections.length; // 32px padding total
// 
  // useEffect(() => {
    // // const index = sections.indexOf(activeSection);
    // Animated.spring(indicatorAnim, {
      // toValue: index * buttonWidth,
      // useNativeDriver: true,
      // stiffness: 180,
      // damping: 20,
    // }).start();
  // }, [activeSection]);
// 
  // return (
    // <View style={styles.container}>
      // Help heading
      // {/* {/* <Text style={styles.helpHeading}>Help</Text> */} */}
{/*  */}
      // Top bar
      {/* <View style={styles.topBar}> */}
        // {/* {/* <View style={styles.buttonsWrapper}> */} */}
          // Sliding indicator
          {/* <Animated.View */}
            // style={[
              // styles.indicator,
              // {
                // width: buttonWidth,
                // // // transform: [{ translateX: indicatorAnim }],
              // },
            // ]}
          // />
          {/* {sections.map((section) => ( */}
            // <TouchableOpacity
              // key={section}
              // // // style={[styles.sectionButton, { width: buttonWidth }]}
              // // onPress={() => setActiveSection(section)}
              // activeOpacity={0.8}
            // >
              {/* <Text */}
                // style={[
                  // styles.sectionText,
                  // // // activeSection === section && styles.activeText,
                // ]}
              // >
                {/* {section} */}
              {/* </Text> */}
            {/* </TouchableOpacity> */}
          // ))}
        {/* </View> */}
      {/* </View> */}
{/*  */}
      // Content below
      {/* <ScrollView */}
        // // contentContainerStyle={styles.contentContainer}
        // // showsVerticalScrollIndicator={true}
      // >
        {/* {activeSection === "Legal Aid" */}
          // // // ? lawyers.map((lawyer, idx) => <LawyerCard key={idx} lawyer={lawyer} />)
          // : activeSection === "Therapy"
          // // // ? therapies.map((therapy, idx) => <TherapyCard key={idx} therapy={therapy} />)
          // // : content[activeSection].map((item, idx) => (
              // // <View key={idx} style={styles.card}>
                // {/* {/* <Text style={styles.cardText}>{item}</Text> */} */}
              {/* </View> */}
            // ))}
      {/* </ScrollView> */}
    {/* </View> */}
  // );
// };
// 
// export default Help;
// 
// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // backgroundColor: "#fde5ecf",
  // },
  // helpHeading: {
    // fontSize: 28,
    // fontWeight: "bold",
    // color: "#000",
    // paddingHorizontal: 16,
    // paddingTop: 16,
    // paddingBottom: 8,
  // },
  // topBar: {
    // paddingHorizontal: 16,
    // // backgroundColor: "rgba(255,255,255,0.25)", // semi-transparent
    // borderRadius: 18,
    // height: 36, // same as indicator
    // marginBottom: 12,
  // },
  // buttonsWrapper: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // position: "relative",
    // flex: 1,
  // },
  // sectionButton: {
    // alignItems: "center",
    // justifyContent: "center",
    // // borderRadius: 18, // same as indicator
    // zIndex: 1,
  // },
  // sectionText: {
    // fontSize: 16,
    // color: "#333",
    // fontWeight: "bold",
  // },
  // activeText: {
    // color: "#fff",
    // fontWeight: "bold",
  // },
  // indicator: {
    // position: "absolute",
    // height: 36,
    // backgroundColor: "#91347dff",
    // borderRadius: 18,
    // top: 0,
    // left: 0,
    // zIndex: 0,
  // },
  // contentContainer: {
    // paddingHorizontal: 16,
    // paddingBottom: 24,
  // },
  // card: {
    // backgroundColor: "#fff",
    // padding: 20,
    // marginBottom: 12,
    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    // elevation: 2,
  // },
  // cardText: {
    // fontSize: 16,
    // color: "#333",
  // },
// });











import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";

import LawyerCard from "./LawyerCards";
import { lawyers } from "./LawyerData";
import TherapyCard from "./TherapyCard";
import { therapies } from "./TherapyData";

const { width } = Dimensions.get("window");

type SectionType = "Legal Aid" | "Therapy" | "NGO Support";

type NGOItem = {
  name: string;
  location: string;
  focus: string;
};

const ngoData: NGOItem[] = [
  { name: "Helping Hands", location: "Delhi", focus: "Child Welfare" },
  { name: "Green Earth NGO", location: "Mumbai", focus: "Environment" },
  { name: "Women Empowerment Trust", location: "Bengaluru", focus: "Women Safety" },
  { name: "Youth Aid Foundation", location: "Kolkata", focus: "Education" },
  { name: "Health First NGO", location: "Chennai", focus: "Healthcare" },
  { name: "Smile India", location: "Hyderabad", focus: "Community Welfare" },
];

// Simple card component for NGO Support
const NGOCard = ({ ngo }: { ngo: NGOItem }) => (
  <View style={styles.card}>
    <Text style={[styles.cardText, { fontWeight: "bold", fontSize: 16 }]}>
      {ngo.name}
    </Text>
    <Text style={styles.cardText}>Location: {ngo.location}</Text>
    <Text style={styles.cardText}>Focus: {ngo.focus}</Text>
  </View>
);

const Help = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("Legal Aid");
  const sections: SectionType[] = ["Legal Aid", "Therapy", "NGO Support"];

  const indicatorAnim = useRef(new Animated.Value(0)).current;
  const buttonWidth = (width - 64) / sections.length; // 32px padding total

  useEffect(() => {
    const index = sections.indexOf(activeSection);
    Animated.spring(indicatorAnim, {
      toValue: index * buttonWidth,
      useNativeDriver: true,
      stiffness: 180,
      damping: 20,
    }).start();
  }, [activeSection]);

  return (
    <View style={styles.container}>
      {/* Help heading */}
      <Text style={styles.helpHeading}>Help</Text>

      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.buttonsWrapper}>
          {/* Sliding indicator */}
          <Animated.View
            style={[
              styles.indicator,
              {
                width: buttonWidth,
                transform: [{ translateX: indicatorAnim }],
              },
            ]}
          />
          {sections.map((section) => (
            <TouchableOpacity
              key={section}
              style={[styles.sectionButton, { width: buttonWidth }]}
              onPress={() => setActiveSection(section)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.sectionText,
                  activeSection === section && styles.activeText,
                ]}
              >
                {section}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content below */}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
      >
        {activeSection === "Legal Aid"
          ? lawyers.map((lawyer, idx) => <LawyerCard key={idx} lawyer={lawyer} />)
          : activeSection === "Therapy"
          ? therapies.map((therapy, idx) => <TherapyCard key={idx} therapy={therapy} />)
          : ngoData.map((ngo, idx) => <NGOCard key={idx} ngo={ngo} />)}
      </ScrollView>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fde5ecf",
  },
  helpHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  topBar: {
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.25)", // semi-transparent
    borderRadius: 18,
    height: 36, // same as indicator
    marginBottom: 12,
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    flex: 1,
  },
  sectionButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    zIndex: 1,
  },
  sectionText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  indicator: {
    position: "absolute",
    height: 36,
    backgroundColor: "#91347dff",
    borderRadius: 18,
    top: 0,
    left: 0,
    zIndex: 0,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
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

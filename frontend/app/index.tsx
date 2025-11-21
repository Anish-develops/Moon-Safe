// import React, { useState } from "react";
// import { StyleSheet, Text, View, Pressable, Platform, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import SettingsPage from "./settings";
// import Help from './help';


// export default function Index() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Help />
//     </View>
//   );
// }

// export default function Index() {
//     const [route, setRoute] = useState<'home'|'settings'>('home');

//     return (
//         <SafeAreaView style={[styles.safeArea, { backgroundColor: '#fde5ecf' }]}>
//             {/* Fixed top header: title on the left (when applicable) and nav (hamburger) at the extreme right */}
//             <View style={[styles.header, { backgroundColor: '#fde5ecf'}]}>
//                 <Text style={[styles.headerTitle, { color: '#000' }]}> {route === 'settings' ? 'Settings' : ''} </Text>
//                 <Pressable onPress={() => setRoute(route === 'home' ? 'settings' : 'home')} style={styles.hamburgerRight} hitSlop={8}>
//                     <Text style={styles.hamburgerText}>☰</Text>
//                 </Pressable>
//             </View>

//             <ScrollView
//                 style={{ flex: 1 }}
//                 contentContainerStyle={[styles.container, { paddingTop: 56 + (Platform.OS === 'ios' ? 12 : 8), flexGrow: 1 }]}
//                 showsVerticalScrollIndicator={true}
//                 keyboardShouldPersistTaps="handled"
//                 bounces={true}
//             >
//                 {route === 'home' ? (
//                     <>
//                         <Text style={styles.tagline}>Empower. Alert. Stay Safe.</Text>
//                         <Text style={styles.title}>Moon Safe</Text>
//                         <Text style={styles.subtitle}>
//                             Configure trusted contacts, trigger SOS alerts, and share
//                             real-time details directly from your phone.
//                         </Text>
//                     </>
//                 ) : (
//                     <SettingsPage onGoBack={() => setRoute('home')} />
//                 )}
//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: "#fde5ecff",
//     },
//     header: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 56,
//         zIndex: 100,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 12,
//     },
//     hamburgerLeft: {
//         marginRight: 8,
//         padding: 8,
//     },
//     hamburgerRight: {
//         marginLeft: 8,
//         padding: 8,
//     },
//     container: {
//         flex: 1,
//         paddingHorizontal: 24,
//         justifyContent: "center",
//         alignItems: "flex-start",
//         gap: 16,
//     },
//     hamburgerText: {
//         color: '#ff7fbbff',
//         fontSize: 22,
//     },
//     headerTitle: {
//         fontSize: 18,
//         fontWeight: '600',
//         marginLeft: 0,
//     },
    
    
//     backButton: {
//         padding: 8,
//     },
//     backText: {
//         color: '#7FD1FF',
//         fontSize: 16,
//     },
//     tagline: {
//         color: "#43082dff",
//         fontSize: 14,
//         letterSpacing: 1.5,
//         textTransform: "uppercase",
//     },
//     title: {
//         color: "#8a1515ff",
//         fontSize: 40,
//         fontWeight: "700",
//     },
//     subtitle: {
//         color: "#490324ff",
//         fontSize: 16,
//         lineHeight: 22,
//     },
// });






























import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsPage from "./settings";
import Help from './help';

export default function Index() {
  const [route, setRoute] = useState<'home'|'settings'|'help'>('home');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: '#fde5ecf' }]}>
      {/* Fixed top header */}
      <View style={[styles.header, { backgroundColor: '#fde5ecf'}]}>
        <Text style={[styles.headerTitle, { color: '#000' }]}>
          {route === 'settings' ? 'Settings' : route === 'help' ? 'Help' : ''}
        </Text>
        <Pressable 
          onPress={() => setRoute(route === 'home' ? 'settings' : 'home')} 
          style={styles.hamburgerRight} 
          hitSlop={8}
        >
          <Text style={styles.hamburgerText}>☰</Text>
        </Pressable>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.container, { paddingTop: 56 + (Platform.OS === 'ios' ? 12 : 8), flexGrow: 1 }]}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
        bounces={true}
      >
        {route === 'home' && (
          <>
            <Text style={styles.tagline}>Empower. Alert. Stay Safe.</Text>
            <Text style={styles.title}>Moon Safe</Text>
            <Text style={styles.subtitle}>
              Configure trusted contacts, trigger SOS alerts, and share
              real-time details directly from your phone.
            </Text>
          </>
        )}

        {route === 'settings' && <SettingsPage onGoBack={() => setRoute('home')} />}
        {route === 'help' && <Help />}
      </ScrollView>

      {/* Footer buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 16, backgroundColor: '#fff' }}>
        <Pressable onPress={() => setRoute('home')}>
          <Text>Home</Text>
        </Pressable>
        <Pressable onPress={() => setRoute('settings')}>
          <Text>Settings</Text>
        </Pressable>
        <Pressable onPress={() => setRoute('help')}>
          <Text>Help</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fde5ecff" },
  header: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 56,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  hamburgerRight: { marginLeft: 8, padding: 8 },
  container: { flex: 1, paddingHorizontal: 24, justifyContent: "center", alignItems: "flex-start", gap: 16 },
  hamburgerText: { color: '#ff7fbbff', fontSize: 22 },
  headerTitle: { fontSize: 18, fontWeight: '600', marginLeft: 0 },
  tagline: { color: "#43082dff", fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase" },
  title: { color: "#8a1515ff", fontSize: 40, fontWeight: "700" },
  subtitle: { color: "#490324ff", fontSize: 16, lineHeight: 22 },
});

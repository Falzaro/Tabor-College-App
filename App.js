<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
=======
import { Linking } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    const hyperLinks = [
        ["Campus Cafe", "https://tab-web.scansoftware.com/cafeweb/login"],
        ["Tabor Cafe Menu", "https://oncampusdining.com/tabor/menus/"],
        ["Tabor Main Page", "https://tabor.edu/"],
        ["Sports", "https://www.taborbluejays.com/"],
        ["Calendar", "https://tabor.edu/calendar/"],
        ["News", "https://tabor.edu/news"],
        ["library", "https://taborcollege.libguides.com/library"],
    ];

    return (
        <View style={styles.container}>
            {hyperLinks.map(([name, url]) => (
                <Text
                    key={name}
                    style={{ marginVertical: 18 }}
                    onPress={() => Linking.openURL(url)}
                >
                    {name}
                </Text>
            ))}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
>>>>>>> parent of 4e33283... Comit for Front_End
});

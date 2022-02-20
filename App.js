<<<<<<< HEAD
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
=======
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import MenuScreen from './screens/MenuScreen.js';

>>>>>>> 4e332832759686f7911fab62c5544be9e1b646d6

export default function App() {
    return (
       <View style={styles.container}>
          <MenuScreen title="Tabor College" />
       </View>
    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
    container: {
        flex: 1,
    }
})
>>>>>>> 4e332832759686f7911fab62c5544be9e1b646d6

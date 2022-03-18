// Module Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import TaborCollege from "../TaborCollege";
import CafeMenu from "../CafeMenu";
import Sports from "../Sports";
import HelpfulHours from "../HelpfulHours";
import News from "../News";
import Jayshop from "../Jayshop";
import Library from "../Library";
import StudentLife from "../StudentLife";
import Maps from "../Maps";

const Home = () => {
    const Stack = createNativeStackNavigator();
    return (
        <View style={styles.screen}>
            <Stack.Navigator
                initialRouteName="Tabor College"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Tabor College" component={TaborCollege} />
                <Stack.Screen name="Cafe Menu" component={CafeMenu} />
                <Stack.Screen name="Sports" component={Sports} />
                <Stack.Screen name="Helpful Hours" component={HelpfulHours} />
                <Stack.Screen name="News" component={News} />
                <Stack.Screen name="Jayshop" component={Jayshop} />
                <Stack.Screen name="Library" component={Library} />
                <Stack.Screen name="Student Life" component={StudentLife} />
                <Stack.Screen name="Maps" component={Maps} />
            </Stack.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "red",
    },
});

export default Home;

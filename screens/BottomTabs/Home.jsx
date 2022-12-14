// Module Imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";

// Relative Imports
import TaborCollege from "../TaborCollege";
import DiningHall from "../DiningHall";
import Athletics from "../Athletics";
import HelpfulHours from "../HelpfulHours";
import Jayshop from "../Jayshop";
import StudentLife from "../StudentLife";
import Maps from "../Maps";
import Webview from "../Webview";
import { Colors } from "react-native-paper";

const Home = () => {
    // Stack Navigator to handle different screens
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.screen}>
            <Stack.Navigator
                initialRouteName="Tabor College"
                screenOptions={{
                    headerBackTitle: "Back",
                    headerTintColor: "#fff",
                    headerTitle: "",
                    headerTransparent: true,
                }}
            >
                {/* Render the screen that the user is on */}
                <Stack.Screen name="Tabor College" component={TaborCollege} />
                <Stack.Screen name="Dining Hall" component={DiningHall} />
                <Stack.Screen name="Athletics" component={Athletics} />
                <Stack.Screen name="Helpful Hours" component={HelpfulHours} />
                <Stack.Screen name="Jayshop" component={Jayshop} />
                <Stack.Screen name="Student Life" component={StudentLife} />
                <Stack.Screen name="Maps" component={Maps} />
                <Stack.Screen
                    name="Webview"
                    component={Webview}
                    options={(navigation) => ({
                        headerTransparent: false,
                        headerBackTitle: "Back",
                        headerTitle: navigation.route.params.name,
                        headerTintColor: Colors.darkBlue,
                    })}
                />
            </Stack.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default Home;

// Module Imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Relative Imports
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* Bottom Tabs */}
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Settings"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="settings-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

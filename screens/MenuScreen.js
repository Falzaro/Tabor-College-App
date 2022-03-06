import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Alert,
    TouchableOpacity,
    Linking,
} from "react-native";
import ButtonLabel from "../components/SettingButtonLabel.js";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Foundation from "react-native-vector-icons/Foundation";

const MenuScreen = ({ title }) => {
    const buttonOptions = [
        {
            label: "Canvas",
            link: "https://tabor.instructure.com/login/ldap",
            Image: null,
        },
        {
            label: "Student Life",
            link: "https://tabor.instructure.com/login/ldap",
            Image: <Ionicons name="people" size={50} color="#003082" />,
        },
        {
            label: "Dining",
            link: "https://tabor.instructure.com/login/ldap",
            Image: (
                <MaterialIcons name="local-dining" size={50} color="#003082" />
            ),
        },
        {
            label: "Campus Cafe",
            link: "https://tab-web.scansoftware.com/cafeweb/login",
            Image: <Ionicons name="cafe" size={50} color="#003082" />,
        },
        {
            label: "Calendar",
            link: "https://tabor.edu/calendar/",
            Image: <FontAwesome5 name="calendar" size={50} color="#003082" />,
        },
        {
            label: "Jayshop",
            link: "https://tabor.instructure.com/login/ldap",
            Image: (
                <MaterialCommunityIcons
                    name="shopping-outline"
                    size={50}
                    color="#003082"
                />
            ),
        },
        {
            label: "Maps",
            link: "https://tabor.instructure.com/login/ldap",
            Image: (
                <FontAwesome5 name="map-marked-alt" size={50} color="#003082" />
            ),
        },
        {
            label: "Sports",
            link: "https://tabor.instructure.com/login/ldap",
            Image: (
                <Ionicons name="american-football" size={50} color="#003082" />
            ),
        },
        {
            label: "Helpful Hours",
            link: "https://tabor.instructure.com/login/ldap",
            Image: (
                <MaterialCommunityIcons
                    name="account-clock-outline"
                    size={50}
                    color="#003082"
                />
            ),
        },
        {
            label: "News",
            link: "https://tabor.instructure.com/login/ldap",
            Image: <FontAwesome name="newspaper-o" size={50} color="#003082" />,
        },
        {
            label: "Notifications",
            link: "https://tabor.instructure.com/login/ldap",
            Image: (
                <Ionicons
                    name="notifications-outline"
                    size={40}
                    color="#003082"
                />
            ),
        },
    ];

    return (
        <View style={styles.screen}>
            {/* Setting up Image Header */}
            <View style={styles.coverImage}>
                <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    blurRadius={3}
                    source={require("../assets/MenuHeader.jpg")}
                >
                    {/* Setting up Text Header */}
                    <View style={styles.textView}>
                        <Text style={styles.imageText}>{title}</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.buttonContainer}>
                {buttonOptions.map(({ label, link, Image }) => (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Linking.openURL(link)}
                    >
                        {Image}
                        <Text style={styles.buttonText}>{label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/*Setting Button and Customize Navigation Bar */}
            <View>
                <ButtonLabel text="Setting" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //alignItems: 'baseline',
        backgroundColor: "#E5E5E5", // or #E5E5E5
    },
    coverImage: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    imageText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
    },
    textView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 80,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 30,
        flexWrap: "wrap",
    },
    button: {
        display: "flex",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    text: {
        textAlign: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    buttonText: {
        alignSelf: "stretch",
        display: "flex",
        fontSize: 14,
        textAlign: "center",
        flexWrap: "wrap",
        color: "red",
    },
    imageIcon: {
        width: 50,
        height: 50,
    },
});

export default MenuScreen;

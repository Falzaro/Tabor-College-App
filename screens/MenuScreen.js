// Module Imports
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// Relative Imports
import ButtonLabel from "../components/SettingButtonLabel.js";
import { buttonsData } from "../data/buttonsData";
import MainButton from "../components/MainButton";

const MenuScreen = ({ title }) => {
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

            {/* Map out the buttons */}
            <View style={styles.buttonContainer}>
                {buttonsData.map(({ label, link, Image }) => (
                    <MainButton
                        key={label}
                        label={label}
                        link={link}
                        Image={Image}
                    />
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
    text: {
        textAlign: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 30,
        flexWrap: "wrap",
    },
    imageIcon: {
        width: 50,
        height: 50,
    },
});

export default MenuScreen;

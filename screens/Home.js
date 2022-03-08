// Module Imports
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// Relative Imports
import { buttonsData } from "../data/buttonsData";
import MainButton from "../components/MainButton";

const Home = () => {
    return (
        <View style={styles.screen}>
            {/* Setting up Image Header */}
            <View style={styles.coverImage}>
                <ImageBackground
                    style={styles.imgBackground}
                    blurRadius={2}
                    source={require("../assets/MenuHeader.jpg")}
                >
                    {/* Setting up Text Header */}
                    <Text style={styles.imageText}>Tabor College</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenBody}>
                <View style={styles.buttonsBackCover}>
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
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    coverImage: {
        width: "100%",
        height: 180,
    },
    imgBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    imageText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 20,
    },
    screenBody: {
        flex: 1,
        padding: 15,
    },
    buttonsBackCover: {
        height: "100%",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 23,
    },
});

export default Home;

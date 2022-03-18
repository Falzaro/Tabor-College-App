// Module Imports
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Main = ({ children, title }) => {
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
                    <Text style={styles.imageText}>{title}</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenBody}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#EEEEEE",
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
        marginTop: 24,
    },
    screenBody: {
        flex: 1,
        padding: 15,
    },
    buttonsBackCover: {
        height: "100%",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#f8f8f8",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 30,
    },
});

export default Main;

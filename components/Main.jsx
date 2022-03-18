// Module Imports
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Main = ({ children, name }) => {
    return (
        <>
            {/* Setting up Image Header */}
            <View style={styles.coverImage}>
                <ImageBackground
                    style={styles.imgBackground}
                    blurRadius={2}
                    source={require("../assets/MenuHeader.jpg")}
                >
                    {/* Setting up Text Header */}
                    <Text style={styles.imageText}>{name}</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenBody}>{children}</View>
        </>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: "#EBEBEB",
    },
});

export default Main;

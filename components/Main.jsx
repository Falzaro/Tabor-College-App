// Module Imports
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Main = ({ children, name, coverImage }) => {
    return (
        <>
            {/* Setting up Image Header */}
            <View style={styles.coverImage}>
                <ImageBackground
                    style={styles.imgBackground}
                    blurRadius={1}
                    source={coverImage}
                >
                    <View style={styles.imgBackgroundOverlay}>
                        {/* Setting up Text Header */}
                        <Text style={styles.imageText}>{name}</Text>
                    </View>
                </ImageBackground>
            </View>
            {/* Children contains screen content (Tabor College, Cafe Menu, etc.) */}
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
    },
    imgBackgroundOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.16)",
    },
    imageText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 27,
    },
    screenBody: {
        flex: 1,
        padding: 15,
        backgroundColor: "#EBEBEB",
    },
});

export default Main;

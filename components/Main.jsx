// Module Imports
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Main = ({ children, name, coverImage, imageSize }) => {
    const coverImageStyles = StyleSheet.create({
        backgroundOverlay: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: coverImage.darkness,
        },
    });

    const imageHeight =
        imageSize === "small" ? { height: 140 } : { height: 180 };

    console.log(imageHeight);
    return (
        <>
            {/* Setting up Image Header */}
            <View style={{ ...styles.coverImage, ...imageHeight }}>
                <ImageBackground
                    style={styles.imgBackground}
                    blurRadius={coverImage.blurRadius}
                    source={coverImage.source}
                >
                    <View style={coverImageStyles.backgroundOverlay}>
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
    imageText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 27,
    },
    screenBody: {
        flex: 1,
        backgroundColor: "#EBEBEB",
    },
});

export default Main;

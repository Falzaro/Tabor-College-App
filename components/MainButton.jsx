import React from "react";
import { Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

function MainButton({ label, link, Image }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(link)}
        >
            {Image}
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

export default MainButton;

const styles = StyleSheet.create({
    button: {
        display: "flex",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    buttonText: {
        alignSelf: "stretch",
        display: "flex",
        fontSize: 14,
        textAlign: "center",
        flexWrap: "wrap",
    },
});

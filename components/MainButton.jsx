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
        width: 110,
        height: 110,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 14.2,
        textAlign: "center",
        marginTop: 12,
        fontWeight: "500",
        color: "#495057",
    },
});

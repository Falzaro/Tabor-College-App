import React from "react";
import { Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Buttons for the main screen
function MainButton({ label, link, Image }) {
    const navigation = useNavigation();

    const handlePress = () => {
        const externalButtons = [
            "Campus Cafe",
            "Canvas",
            "Calendar",
            "Faculty",
        ];
        if (externalButtons.includes(label)) Linking.openURL(link);
        else navigation.navigate(label);
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            {Image}
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

export default MainButton;

const styles = StyleSheet.create({
    button: {
        width: 112,
        height: 110,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 14.2,
        textAlign: "center",
        marginTop: 14,
        fontWeight: "500",
        color: "#495057",
    },
});

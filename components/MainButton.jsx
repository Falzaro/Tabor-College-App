import React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Buttons for the main screen
function MainButton({ label, link, Image }) {
    const navigation = useNavigation();
    const externalButtons = ["Campus Cafe", "Canvas", "Calendar", "Faculty"];
    const isButtonExternal = externalButtons.includes(label);

    const handlePress = () => {
        // If the button is an external link, open it in the browser
        if (isButtonExternal) Linking.openURL(link);
        // Otherwise, navigate to the screen
        else navigation.navigate(label);
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <>
                {Image}
                <View style={styles.externalIconWrapper}>
                    {isButtonExternal && (
                        <Ionicons
                            name="arrow-redo-sharp"
                            size={14}
                            color="#4A4A4A"
                            style={styles.externalIcon}
                        />
                    )}
                </View>
                <Text style={styles.buttonText}>{label}</Text>
            </>
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
    externalIconWrapper: {
        position: "absolute",
        top: 6,
        right: 20,
        width: 20,
        height: 20,
        borderRadius: 10,
        transform: [{ rotate: "-6deg" }],
    },
    externalIcon: {},
});

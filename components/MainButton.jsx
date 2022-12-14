import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Buttons for the main screen
function MainButton({ name, url, image, screenButtonNames }) {
    const navigation = useNavigation();
    const isScreenButton = screenButtonNames.includes(name);

    const handlePress = () => {
        if (!isScreenButton) navigation.navigate("Webview", { url, name });
        else navigation.navigate(name);
    };

    if ((!name, !url, !image)) return <View style={styles.button} />;

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <>
                {/* Do not render if there's no image */}
                {Boolean(image) && (
                    <Image
                        source={{ uri: image }}
                        style={styles.icon}
                        alt="random"
                        resizeMode="contain"
                    />
                )}
                <View style={styles.externalIconWrapper}>
                    {!isScreenButton && (
                        <Ionicons
                            name="arrow-redo-sharp"
                            size={14}
                            color="#444444"
                            style={styles.externalIcon}
                        />
                    )}
                </View>
                <Text style={styles.buttonText}>{name}</Text>
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
        top: 4,
        right: 18,
        width: 20,
        height: 20,
        borderRadius: 10,
        transform: [{ rotate: "-6deg" }],
        opacity: 0.84,
    },
    icon: {
        height: 36,
        aspectRatio: 1,
    },
});

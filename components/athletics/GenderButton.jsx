import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const GenderButton = ({ name, onPress, value }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View
                style={[
                    styles.button,
                    // Check if it is the selected
                    name === value
                        ? styles.activeButton
                        : styles.inActiveButton,
                ]}
            >
                <Text
                    style={{
                        ...styles.buttonText,
                        // Check if it is the selected
                        color: name === value ? "#fff" : "#A3A3A3",
                    }}
                >
                    {/* capitalize the first letter */}
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default GenderButton;

const styles = StyleSheet.create({
    button: {
        width: 110,
        paddingVertical: 14,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    activeButton: {
        backgroundColor: "#0969CD",
        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 4,
    },
    inActiveButton: {
        backgroundColor: "#000",
        opacity: 0.26,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
    },
});

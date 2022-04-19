import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const GenderButton = ({ title, onPress, value }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View
                style={[
                    styles.button,
                    title === value
                        ? styles.activeButton
                        : styles.inActiveButton,
                ]}
            >
                <Text
                    style={{
                        ...styles.buttonText,
                        color: title === value ? "#fff" : "#A3A3A3",
                    }}
                >
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default GenderButton;

const styles = StyleSheet.create({
    button: {
        width: 110,
        marginRight: 15,
        paddingVertical: 16,
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

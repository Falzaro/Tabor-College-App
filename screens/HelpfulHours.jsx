import { StyleSheet, View, Text } from "react-native";

function HelpfulHours() {
    return (
        <View style={styles.center}>
            <Text>Helpful Hours</Text>
        </View>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

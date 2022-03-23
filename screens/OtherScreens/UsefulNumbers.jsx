import { StyleSheet, View, Text } from "react-native";

function UsefulNumbers() {
    return (
        <View style={styles.center}>
            <Text>Useful Numbers</Text>
        </View>
    );
}

export default UsefulNumbers;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

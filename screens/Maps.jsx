import { StyleSheet, View, Text } from "react-native";

function Settings() {
    return (
        <View style={styles.center}>
            <Text>Maps</Text>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

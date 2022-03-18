import { StyleSheet, Text, View } from "react-native";

function Notifications() {
    return (
        <View style={styles.center}>
            <Text>Notifications</Text>
        </View>
    );
}

export default Notifications;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

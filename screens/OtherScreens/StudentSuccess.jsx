import { StyleSheet, View, Text } from "react-native";

function StudentSuccess() {
    return (
        <View style={styles.center}>
            <Text>Student Life</Text>
        </View>
    );
}

export default StudentSuccess;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

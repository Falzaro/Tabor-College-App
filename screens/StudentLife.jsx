import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function StudentLife({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Student Life</Text>
            </View>
        </Main>
    );
}

export default StudentLife;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function Maps({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Maps</Text>
            </View>
        </Main>
    );
}

export default Maps;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

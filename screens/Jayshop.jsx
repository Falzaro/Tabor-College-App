import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function Jayshop({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Jayshop</Text>
            </View>
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

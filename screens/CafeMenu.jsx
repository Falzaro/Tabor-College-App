import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function CafeMenu({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Cafe Menu</Text>
            </View>
        </Main>
    );
}

export default CafeMenu;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

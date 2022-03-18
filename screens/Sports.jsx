import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function Sports({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Sports</Text>
            </View>
        </Main>
    );
}

export default Sports;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

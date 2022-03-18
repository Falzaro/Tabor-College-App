import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function Library({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Library</Text>
            </View>
        </Main>
    );
}

export default Library;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

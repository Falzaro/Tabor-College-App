import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function News({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>News</Text>
            </View>
        </Main>
    );
}

export default News;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

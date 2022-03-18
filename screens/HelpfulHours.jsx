import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function HelpfulHours({ route }) {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.center}>
                <Text>Helpful Hours</Text>
            </View>
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

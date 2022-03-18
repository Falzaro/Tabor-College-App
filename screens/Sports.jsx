import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function Sports({ route }) {
    const { name } = route;
    const sportsCover = require("../assets/coverImage/sports.jpeg");
    return (
        <Main name={name} coverImage={sportsCover}>
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

import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import mapsCover from "../assets/coverImage/maps.jpeg";

function Maps({ route }) {
    const { name } = route;
    const mapsCover = require("../assets/coverImage/maps.jpg");
    return (
        <Main name={name} coverImage={mapsCover}>
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

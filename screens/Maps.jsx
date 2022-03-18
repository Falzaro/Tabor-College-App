import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import mapsCover from "../assets/coverImage/maps.jpeg";

function Maps({ route }) {
    const { name } = route;
    const mapsCover = require("../assets/coverImage/maps.jpg");
    const coverImage = {
        source: mapsCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>{/* No Content */}</View>
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

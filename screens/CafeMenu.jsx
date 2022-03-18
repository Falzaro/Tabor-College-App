import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

function CafeMenu({ route }) {
    const { name } = route;
    const cafeMenuCover = require("../assets/coverImage/cafeMenu.jpg");
    const coverImage = {
        source: cafeMenuCover,
        darkness: "rgba(0, 0, 0, 0.17)",
        blurRadius: 1,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>{/* No Content */}</View>
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

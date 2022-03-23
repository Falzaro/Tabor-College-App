import { StyleSheet, View } from "react-native";
import Main from "../components/Main";

function Jayshop({ route }) {
    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>{/* No Content */}</View>
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
 
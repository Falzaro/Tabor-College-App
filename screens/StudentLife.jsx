import { StyleSheet, View } from "react-native";
import Main from "../components/Main";

function StudentLife({ route }) {
    const { name } = route;
    const studentLifeCover = require("../assets/coverImage/studentLife.png");
    const coverImage = {
        source: studentLifeCover,
        darkness: "rgba(0, 0, 0, 0.11)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>{/* No Content */}</View>
        </Main>
    );
}

export default StudentLife;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

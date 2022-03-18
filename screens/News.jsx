import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import newsCover from "../assets/coverImage/news.jpeg";

function News({ route }) {
    const { name } = route;
    const newsCover = require("../assets/coverImage/news.jpg");
    const coverImage = {
        source: newsCover,
        darkness: "rgba(0, 0, 0, 0.0)",
        blurRadius: 0,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>{/* No Content */}</View>
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

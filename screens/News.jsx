import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import newsCover from "../assets/coverImage/news.jpeg";

function News({ route }) {
    const { name } = route;
    const newsCover = require("../assets/coverImage/news.jpg");
    return (
        <Main name={name} coverImage={newsCover}>
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

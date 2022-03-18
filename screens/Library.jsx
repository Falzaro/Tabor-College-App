import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import libraryCover from "../assets/coverImage/library.jpg";

function Library({ route }) {
    const { name } = route;
    const libraryCover = require("../assets/coverImage/library.jpg");
    return (
        <Main name={name} coverImage={libraryCover}>
            <View style={styles.center}>
                <Text>Library</Text>
            </View>
        </Main>
    );
}

export default Library;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import cafeMenuCover from "../assets/coverImage/cafeMenu.jpeg";

function CafeMenu({ route }) {
    const { name } = route;
    const cafeMenuCover = require("../assets/coverImage/cafeMenu.jpg");
    return (
        <Main name={name} coverImage={cafeMenuCover}>
            <View style={styles.center}>
                <Text>Cafe Menu</Text>
            </View>
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

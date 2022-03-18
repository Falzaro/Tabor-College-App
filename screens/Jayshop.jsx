import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import jayshopCover from "../assets/coverImage/jayshop.jpeg";

function Jayshop({ route }) {
    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    return (
        <Main name={name} coverImage={jayshopCover}>
            <View style={styles.center}>
                <Text>Jayshop</Text>
            </View>
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

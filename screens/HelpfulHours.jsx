import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
// import helpfulHoursCover from "../assets/coverImage/helpfulHours.jpeg";

function HelpfulHours({ route }) {
    const { name } = route;
    const helpfulHoursCover = require("../assets/coverImage/helpfulHours.jpg");
    return (
        <Main name={name} coverImage={helpfulHoursCover}>
            <View style={styles.center}>
                <Text>Helpful Hours</Text>
            </View>
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

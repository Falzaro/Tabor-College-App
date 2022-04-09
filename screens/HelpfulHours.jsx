import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

// import Relative
import CourtSideGrill from './HelpfulHoursTab/CourtSideGrill';

function HelpfulHours({ route }) {
    const { name } = route;
    const helpfulHoursCover = require("../assets/coverImage/helpfulHours.jpg");
    const coverImage = {
        source: helpfulHoursCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <CourtSideGrill />
            </View>
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
    },
});

import { StyleSheet, View, Text, FlatList } from "react-native";
import Main from "../components/Main";


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
       
        </Main>
    );
};

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        padding: 10,
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        flexGrow: 1,
    },
});

import { StyleSheet, View } from "react-native";
import { Headline } from "react-native-paper";

const SportsBanner = ({ headline }) => {
    return (
        <View style={styles.sportsBanner}>
            <View style={styles.divider} />
            <Headline style={styles.headline}>{headline}</Headline>
            <View style={styles.divider} />
        </View>
    );
};

export default SportsBanner;

const styles = StyleSheet.create({
    sportsBanner: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    divider: {
        flex: 1,
        height: 1.3,
        backgroundColor: "#002d72",
    },
    headline: {
        color: "#002d72",
        marginHorizontal: 20,
    },
});

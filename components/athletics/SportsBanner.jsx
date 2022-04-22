import { StyleSheet, Text, View } from "react-native";
import { Headline, Divider } from "react-native-paper";

const SportsBanner = () => {
    return (
        <View style={styles.sportsBanner}>
            <View style={styles.divider} />
            <Headline style={styles.headline}>Sports</Headline>
            <View style={styles.divider} />
        </View>
    );
};

export default SportsBanner;

const styles = StyleSheet.create({
    sportsBanner: {
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    divider: {
        flex: 1,
        height: 1.5,
        backgroundColor: "#002d72",
    },
    headline: {
        color: "#002d72",
        marginHorizontal: 20,
    },
});

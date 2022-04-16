import { View, FlatList, StyleSheet, Text } from "react-native";
import { Subheading } from "react-native-paper";

const HelpfulTime = ({ item }) => {
    return (
        <View style={styles.helpfulTime}>
            {/* Show days */}
            <Subheading style={styles.title}>{item.days}</Subheading>
            {/* Map out the hours */}
            <FlatList
                showsVerticalScrollIndicator={false}
                listKey={(_, index) => `_key${index}`}
                keyExtractor={(_, index) => `_key${index}`}
                data={item.hours}
                renderItem={({ item: hours }) => (
                    <Text style={styles.hours}>{hours}</Text>
                )}
            />
        </View>
    );
};

export default HelpfulTime;

const styles = StyleSheet.create({
    helpfulTime: {
        alignItems: "center",
        marginTop: 5,
    },
    card: {
        marginTop: 5,
        alignItems: "center",
        marginBottom: 5,
        marginLeft: -64,
    },
    contact: {
        textAlign: "center",
        color: "#003082",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 8,
    },
    hours: {
        color: "#5a6167",
        marginBottom: 7,
        textAlign: "center",
    },
});

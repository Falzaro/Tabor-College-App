import { View, FlatList, StyleSheet, Text } from "react-native";
import { Subheading, Card, Title } from "react-native-paper";

const AvailableHours = ({ openHours, section }) => {
    return (
        <Card style={styles.card}>
            <Title style={styles.title}>Available Hours</Title>
            {section.location && (
                <Text style={styles.location}>({section.location})</Text>
            )}
            {openHours?.map((item, index) => (
                <View style={styles.item} key={`_key${index}`}>
                    <Subheading style={styles.days}>{item.days}</Subheading>
                    {item.hours.map((hours, index) => (
                        <Text style={styles.hours} key={`_key${index}`}>
                            {hours}
                        </Text>
                    ))}
                </View>
            ))}
        </Card>
    );
};

export default AvailableHours;

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 5,
    },
    days: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 7,
    },
    location: {
        textAlign: "center",
        fontStyle: "italic",
        marginBottom: 7,
    },
    contact: {
        textAlign: "center",
        color: "#003082",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
    },
    hours: {
        color: "#5a6167",
        marginBottom: 7,
        textAlign: "center",
    },
});

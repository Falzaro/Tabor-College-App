import { View, FlatList, StyleSheet, Text } from "react-native";
import { Subheading, Card, Title } from "react-native-paper";

const AvailableHours = ({ openHours, section }) => {
    return (
        <Card style={styles.card}>
            <Title style={styles.title}>Available Hours</Title>
            {section.location && (
                <Text style={styles.location}>({section.location})</Text>
            )}
            <FlatList
                style={{ marginBottom: 5 }}
                showsVerticalScrollIndicator={false}
                listKey={(_, index) => `_key${index.toString()}`}
                keyExtractor={(_, index) => `_key${index.toString()}`}
                data={openHours}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        {/* Show days */}
                        <Subheading style={styles.days}>{item.days}</Subheading>
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
                )}
            />
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

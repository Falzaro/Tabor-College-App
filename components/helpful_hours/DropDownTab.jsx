import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Card, List, Title } from "react-native-paper";
import HelpfulTime from "./HelpfulTime";
import ContactInformation from "./ContactInformation";

const DropDownTab = ({ section }) => {
    const [expanded, setExpanded] = useState(false); // set this to false, don't want to open automatically
    const { "Contact information": contactInfo, "open hours": openHours } =
        section;

    // Toggle list accordion on click
    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.contentContainer}>
            <List.Accordion
                style={styles.accordion}
                title={section.title}
                theme={{
                    colors: {
                        primary: "#003082",
                        overflow: "hidden",
                        animation: "scale",
                    },
                }} // this changes the Text to blue when press
                expanded={expanded}
                onPress={handlePress} //alarm-multiple or bell-ring-outline or clock-alert-outline or clock-fast
                left={(props) => <List.Icon {...props} icon="hours-24" />}
            >
                <Card style={styles.card}>
                    <Title style={styles.title}>Hours</Title>
                    {section.location && (
                        <Text style={styles.location}>
                            ({section.location})
                        </Text>
                    )}
                    <FlatList
                        style={{ marginBottom: 5 }}
                        showsVerticalScrollIndicator={false}
                        listKey={(_, index) => `_key${index.toString()}`}
                        keyExtractor={(_, index) => `_key${index.toString()}`}
                        data={openHours}
                        renderItem={({ item }) => <HelpfulTime item={item} />}
                    />
                </Card>
                <ContactInformation contactInfo={contactInfo} />
            </List.Accordion>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingTop: 10,
        width: "100%",
        backgroundColor: "transparent",
    },
    accordion: {
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden",
        paddingLeft: 0,
    },
    card: {
        marginTop: 5,
        alignItems: "center",
        marginBottom: 5,
        marginLeft: -64,
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
    },
    location: {
        textAlign: "center",
        fontStyle: "italic",
    },
});

export default DropDownTab;

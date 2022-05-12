import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import AvailableHours from "./AvailableHours";
import ContactInformation from "./ContactInformation";

const DropDownTab = ({ section }) => {
    const [expanded, setExpanded] = useState(false); // set this to false, don't want to open automatically
    const { "contact information": contactInfo, "open hours": openHours } =
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
                <AvailableHours openHours={openHours} section={section} />
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
});

export default DropDownTab;

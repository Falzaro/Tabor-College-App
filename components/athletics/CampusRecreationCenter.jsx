// Module Imports
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";
import { doc, getDoc } from "firebase/firestore";

// Relative Imports
import { db } from "../../firebase/config";

const CampusRecreationCenter = () => {
    const [hoursOfOperation, setHoursOfOperation] = useState();
    const [weightRoom, setWeightRoom] = useState();

    useEffect(() => {
        const crcRef = doc(db, "athletics", "campus recreation center");
        getDoc(crcRef).then((doc) => {
            setHoursOfOperation(doc.data()["hours of operation"]);
            setWeightRoom(doc.data()["weight room"]);
        });
    }, []);

    return (
        <Card style={styles.campusRecreationCenter}>
            <ImageBackground
                source={require("../../assets/athletics/weight_room.png")}
                style={styles.cardCover}
                imageStyle={{
                    borderRadius: 4,
                }}
            />
            <Title style={styles.crcTitle}>Campus Recreation Center</Title>
            <View style={styles.crcContainer}>
                {/* CRC Hours of Operation */}
                <Subheading style={styles.title}>
                    {hoursOfOperation?.title}
                </Subheading>
                {/* Hours of Operation */}
                {hoursOfOperation?.["open hours"].map((item, i) => (
                    <View style={styles.item} key={`_key${i}`}>
                        {/* Show days */}
                        <Text style={[styles.itemText, { marginRight: 25 }]}>
                            {item.days}
                        </Text>
                        {/* Map out the hours */}
                        {item.hours.map((hours, i) => (
                            <Text key={`_key${i}`} style={styles.hours}>
                                {hours}
                            </Text>
                        ))}
                    </View>
                ))}
                {/* Weight Room */}
                <Subheading style={styles.title}>
                    {weightRoom?.title}
                </Subheading>
                {weightRoom?.["open hours"].map((item, i) => (
                    <View style={styles.item} key={`_key_hours${i}`}>
                        {/* Show days */}
                        <Text style={[styles.itemText, { marginRight: 25 }]}>
                            {item.days}
                        </Text>
                        {/* Map out the hours */}
                        {item.hours.map((hours, i) => (
                            <Text key={`_key${i}`} style={styles.hours}>
                                {hours}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
        </Card>
    );
};

export default CampusRecreationCenter;

const styles = StyleSheet.create({
    campusRecreationCenter: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 15,
    },
    cardCover: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: 90,
        marginBottom: 5,
        borderRadius: 10,
    },
    crcTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2e2e2e",
        textAlign: "center",
    },
    crcContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 14,
        marginTop: 8,
    },
    item: {
        flexDirection: "row",
        justifyContent: "center",
    },
    itemText: {
        marginBottom: 10,
    },
    hours: {
        color: "#484e52",
        marginBottom: 7,
        textAlign: "center",
    },
});

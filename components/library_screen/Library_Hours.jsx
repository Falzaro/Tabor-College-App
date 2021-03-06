import React, { useState, useEffect } from "react";
import { StyleSheet, View, Linking } from "react-native";

import { Card, Title, Subheading, Paragraph, Button } from "react-native-paper";

import { db } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

// set Locations
const latitude = "38.34882";
const longitude = "-97.201";
const label = "Tabor College Library, 400 S Jefferson St, Hillsboro, KS 67063";

// this detect if Phones installed Maps and open Automatically
const url = Platform.select({
    ios: "maps:" + latitude + "," + longitude + "?q=" + label,
    android: "geo:" + latitude + "," + longitude + "?q=" + label,
});

const libUrl = "https://taborcollege.libguides.com/library";

const LibraryHours = () => {
    const [libraryData, setLibraryData] = useState([]);

    useEffect(() => {
        // get Jay Shop data from Firestore
        const docRef = doc(db, "helpful hours example", "library hours");
        const unsub = onSnapshot(docRef, (doc) => {
            const data = doc.data();
            setLibraryData(data);
        });
        return unsub;
    }, []);

    // Deconstruct Just to call the open hours
    const { "Contact information": contactInfo, "open hours": openHours } =
        libraryData;

    return (
        <Card style={styles.card}>
            <Title style={styles.title}>{libraryData.title}</Title>
            <Card.Cover
                style={styles.coverImage}
                source={{ uri: libraryData.image }}
            />
            <Paragraph style={styles.memo}>{libraryData.memo}</Paragraph>
            {openHours?.map((item, index) => {
                return (
                    <View key={index} style={styles.alignSideBySide}>
                        <Subheading style={styles.subheading}>
                            {item.days}
                        </Subheading>
                        <Subheading style={styles.hours}>
                            {item.hours}
                        </Subheading>
                    </View>
                );
            })}

            <Card.Actions style={styles.button}>
                <Button
                    icon="phone"
                    color="#003082"
                    title="Visit Tabor Library"
                    onPress={() => Linking.openURL(`tel:${contactInfo?.phone}`)}
                >
                    {contactInfo?.phone} {contactInfo?.ext}
                </Button>
                <Button
                    icon="web"
                    color="#003082"
                    title="Visit Tabor Library"
                    onPress={() => Linking.openURL(libUrl)}
                >
                    Visit Tabor Library
                </Button>
                <Button
                    icon="map-marker-radius-outline"
                    color="#003082"
                    title="Location"
                    onPress={() => Linking.openURL(url)}
                >
                    Location
                </Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        textAlign: "center",
    },
    alignSideBySide: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingTop: 15,
    },
    memo: {
        textAlign: "center",
        fontStyle: "italic",
        marginTop: 5,
        marginBottom: 5,
        color: "#003082",
        fontSize: 15,
    },
    hours: {
        color: "#484e52",
    },
    coverImage: {
        width: "100%",
        height: "30%",
    },
    button: {
        flexDirection: "column-reverse",
        paddingBottom: 200,
    },
});

export default LibraryHours;

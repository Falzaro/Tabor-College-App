import React, { useEffect, useState } from "react";
import { Linking, StyleSheet, View, FlatList } from "react-native";
import { Card, Button } from "react-native-paper";

import { db } from "../../firebase/config";
import { onSnapshot, doc } from "firebase/firestore";

import ContactInfo from "./ContactInfo";
const StudentLinks = () => {
    const [studentLinks, setStudentLinks] = useState([]);
    useEffect(() => {
        const docRef = doc(db, "student life links", "student life links");
        const unsub = onSnapshot(docRef, (doc) => {
            const data = doc.data();
            setStudentLinks(data);
        });
        return unsub;
    }, []);

    return (
        <Card style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                listKey={(_, index) => `_key${index}`}
                keyExtractor={(_, index) => `_key${index}`}
                data={studentLinks.sections}
                renderItem={({ item }) => (
                    <View style={styles.buttonsRow}>
                        {Boolean(item.title) && ( //Checks && Prevent empty data from rendering
                            <Button
                                dark
                                mode="contained"
                                compact
                                contentStyle={styles.button}
                                color="#0071ce"
                                icon="open-in-new"
                                onPress={() => Linking.openURL(item.links)}
                            >
                                {item.title}
                            </Button>
                        )}
                    </View>
                )}
            />
            <ContactInfo />
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsRow: {
        paddingTop: 10,
        paddingHorizontal: 18,
    },
    button: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },
});

export default StudentLinks;

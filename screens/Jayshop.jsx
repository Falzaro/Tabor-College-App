import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Linking, Text } from "react-native";
import Main from "../components/Main";

import { Card, List, Title, Subheading, } from 'react-native-paper';
// import firebase 
import {db} from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

function Jayshop({ route }) {

    const [jayShop, setJayShop] = useState([]);

    useEffect(() => {
        // get Jay Shop data from Firestore
        const docRef = doc(db, "helpful hours example", "jay shop hours");
        getDoc(docRef)
            .then((doc) => {
                const data = doc.data();
                setJayShop(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const { "Contact information": contactInfo, "open hours": openHours } =
    jayShop;

    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text>{jayShop.title}</Text>
                    <Text>{jayShop.location}</Text>
                    <FlatList
                    style={{ marginBottom: 5, }}
                    showsVerticalScrollIndicator={false}
                    listKey={(_, index) => `_key${index}`}
                    keyExtractor={(_, index) => `_key${index}`}
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
            </View>
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
    card:{
        paddingHorizontal: 18,
        alignItems: "center",
        backgroundColor: 'white'
    },
});

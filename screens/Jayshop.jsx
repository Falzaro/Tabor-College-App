import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Linking,  } from "react-native";
import Main from "../components/Main";

import { Card, List, Title, Subheading, } from 'react-native-paper';
// import firebase 
import {db} from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

function Jayshop({ route }) {

    const [jayShop, setJayShop] = useState([]);

    useEffect(() => {
        // get Jay Shop data from Firestore
        const docRef = doc (db, "helpful hours", "jay shop");
        getDoc(docRef)
            .then((doc) => {
                setJayShop(doc.data().sections);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <FlatList 
                    data = {jayShop}
                    listKey = {(item, index) => index.toString()}
                    bounces = {false}
                    renderItem ={({item:section}) => (
                        <View> 
                            
                        </View>
                    )}
                />
            </View>
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

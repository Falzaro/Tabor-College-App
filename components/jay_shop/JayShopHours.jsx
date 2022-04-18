import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Linking, Text } from "react-native";

import { Card, Title, Subheading, } from 'react-native-paper';
// import firebase 

import {db} from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const JayShopHours = () => {
    const [jayShop, setJayShop] = useState([]);

    useEffect(() => {
        // get Jay Shop data from Firestore
        const docRef = doc(db, "helpful hours example", "jay shop hours");
        getDoc(docRef)
            .then((doc) => {
                const data = doc.data();
                setJayShop(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const { "Contact information": contactInfo, "open hours": openHours } = 
    jayShop;

    return (
        <View  style = {styles.container}>
                <Card style = {styles.card} >
                    <Title style ={styles.title}>{jayShop.title}</Title>
                    <Text style = {styles.location}>{jayShop.location}</Text>
                        <FlatList
                            style={{ marginBottom: 5, }}
                            showsVerticalScrollIndicator={false}
                            listKey={(_, index) => `_key${index}`}
                            keyExtractor={(_, index) => `_key${index}`}
                            data={openHours}
                            renderItem={({ item }) => (
                                <View style = {styles.alignSideBySide}>
                                    {/* Show days */}
                                    <Subheading styles ={styles.days} >{item.days}</Subheading>
                                    {/* Map out the hours */}
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        listKey={(_, index) => `_key${index}`}
                                        keyExtractor={(_, index) => `_key${index}`}
                                        data={item.hours}
                                        renderItem={({ item: hours }) => (
                                            <Subheading styles = {styles.hours} >{hours}</Subheading>
                                        )}
                                    />
                                </View>
                            )}
                        />
                </Card>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 5,
        paddingTop: 50,
       
       paddingHorizontal: 18,
    },
    card:{
        paddingHorizontal: 10,
        borderColor: '#003082',
        borderWidth: 1,
    },
    hours:{  // align the hours to the -> right 
        alignSelf: 'flex-end',
    },
    days:{ // align to the start -> left
        alignSelf: 'flex-start',

    },
    alignSideBySide:{ // this align the Days and Hours next to each other but space-between 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
    },
    location:{
        textAlign: "center",
        fontStyle: "italic",
        marginBottom: 7,
    },

});

export default JayShopHours;
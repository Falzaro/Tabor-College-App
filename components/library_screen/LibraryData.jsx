import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Image, Text } from "react-native";

import { Card, Title, Subheading, } from 'react-native-paper';
// import firebase 

import {db} from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const LibraryData = () => {
    const [libraryData, setLibraryData] = useState([]);

    useEffect(() => {
        // get Jay Shop data from Firestore
        const docRef = doc(db, "helpful hours example", "library hours");
        getDoc(docRef)
            .then((doc) => {
                const data = doc.data();
                setLibraryData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const { "Contact information": contactInfo, "open hours": openHours } = 
    libraryData;

    return (
        <View  style = {styles.container}>
                <Card style = {styles.card} >
                    <Title style ={styles.title}>{libraryData.title}</Title>
                    {/* extracting Image from firestore */}
                    <Image style = {styles.image} source = {{uri: libraryData.image}}/>
                    <Text style = {styles.memo}>{libraryData.memo}</Text>
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
        //marginTop: 5,
        paddingTop: 5,
    },
    card:{
        paddingHorizontal: 10,
       // borderColor: '#003082',
       // borderWidth: 1,
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
        marginBottom: 5,
    },
    title:{
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
    },
    memo:{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: 5,
        marginBottom: 5,
        color: "#003082",
        fontSize: 15,
    },
    image: {
        width: "100%",
        height:"50%",
        marginBottom: 5
    },
});

export default LibraryData;
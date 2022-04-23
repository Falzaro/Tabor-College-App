import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Linking, FlatList, SafeAreaView } from "react-native";
import Main from "../components/Main";
import { Card, Title, Subheading, Paragraph, Button } from 'react-native-paper';

// import firebase 

import {db} from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

// set Locations
const latitude = "38.34882";
const longitude = "-97.201";
const label = "Tabor College Library, 400 S Jefferson St, Hillsboro, KS 67063";

// this detect if Phones installed Maps and open Automatically 
const url = Platform.select({
  ios: "maps:" + latitude + "," + longitude + "?q=" + label,
  android: "geo:" + latitude + "," + longitude + "?q=" + label
});

function Library({ route }) {
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

    // Deconstruct Just to call the open hours
    const {"Contact information": contactInfo, "open hours": openHours } = 
        libraryData;

    const { name } = route;
    const libraryCover = require("../assets/coverImage/library.jpg");
    const coverImage = {
        source: libraryCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 1,
    };
    return (
       
        <Main name={name} coverImage={coverImage}>
            <View  style = {styles.container}>
                <Card style = {styles.card} >
                <Title style ={styles.title}>{libraryData.title}</Title>
                    <Card.Content>
                    <Paragraph style = {styles.memo}>{libraryData.memo}</Paragraph>
                    <Card.Cover style = {styles.image} source = {{uri: libraryData.image}}/>
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
                        </Card.Content>
                        {/* using Card.Actions "Button" components. Please see doc for more information */}
                        <Card.Actions style = {{justifyContent: 'space-between'}}>
                            <Button  icon = "web" color ="#003082" title ="Visit Tabor Library"
                                onPress={() => Linking.openURL(contactInfo.url)}>
                                Visit Tabor Library
                            </Button>
                            <Button   icon="map-marker-radius-outline" color= "#003082" title ="Location"  
                                onPress = {() => Linking.openURL(url)}>
                                Location 
                            </Button>
                    </Card.Actions>
                </Card>
        </View>
        </Main>
      
    );
}

export default Library;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 10,
    },
    card:{
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
        marginBottom: 5,
        marginTop: 10,
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
        height:"45%",
        //marginBottom: 5
    },
    hyperLink: {
        color: "#003082"
    }
   
});
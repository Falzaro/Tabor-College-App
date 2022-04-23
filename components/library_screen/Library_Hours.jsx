import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Linking, FlatList, ScrollView } from "react-native";

import { Card, Title, Subheading, Paragraph, Button } from 'react-native-paper';

import {db} from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const LibraryHours = () => {
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
    const {"open hours": openHours } = 
        libraryData;

    return (
        <Card style = {styles.card}>
            <Title style ={styles.title}>{libraryData.title}</Title> 
                <Card.Cover style = {styles.coverImage} source = {{uri: libraryData.image}}/>
                <Paragraph style = {styles.memo}>{libraryData.memo}</Paragraph>
                    <FlatList 
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
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
       textAlign: 'center',
    },
    alignSideBySide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    memo: {
        textAlign: "center",
        fontStyle: "italic",
        marginTop: 5,
        marginBottom: 5,
        color: "#003082",
        fontSize: 15,
    }
})

export default LibraryHours;
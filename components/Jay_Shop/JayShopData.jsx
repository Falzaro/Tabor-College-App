import React, { useEffect, useState} from 'react';
import { View, FlatList, Text, Linking, StyleSheet} from 'react-native';
import { Card, List, Title, Subheading } from 'react-native-paper';

// import Firebase Relative
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

// import StyleSheet 


const JayShopData = () => {
    const [jayShopData, setJayShopData] = useState([]);
    // useState for List Accordions
    const [expanded, setExpanded] = useState(false); // set this to false, don't want to open automatically
    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        // get AcademicOffice data from firestore
        const docRef = doc(db, "helpful hours" , "Jay Shop");
        getDoc(docRef) // get the document
            .then((doc) => {
                setJayShopData(doc.data().sections);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <View style = {styles.contentContainer}>
       
            <FlatList
                data={jayShopData}
                listKey={(item, index) => `_key${index.toString()}`}
                keyExtractor={(item, index) => `_key${index.toString()}`}
                bounces = {false}
                renderItem={({item: section}) => (
                    <Card style = { styles.card} >
                        <Title style = {styles.header}>{section.title}</Title>
                        <Text style = {styles.location}>({section.location})</Text>
                        <FlatList 
                            keyExtractor={(item) => item}
                            data={section.data}
                            renderItem={({item}) => (
                                <View style = {styles.item}>
                                    <Subheading>{item}</Subheading>
                                </View>
                            )}
                        />
                        <Title style = {styles.header}>Contact Information:</Title>
                        <Subheading 
                            onPress = {() => Linking.openURL(`mailto:${section.email}`)}
                            style = {styles.contact}>Email: {section.email}</Subheading>
                    </Card>
                )}
            />

           
            
       
    </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 5,
        width: "100%",
       
    },
    accordion:{
       backgroundColor: 'white',
       borderRadius: 5,
       overflow: 'hidden',
       paddingLeft: 0,
    },
    card: {
        marginTop: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    header: {
        textAlign: 'center',
        //fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 5,
        
    },
    item: {
        alignItems: 'center',
        marginTop: 5,
    },
    location: {
        textAlign: 'center',
    },
    contact: {
        textAlign: 'center',
        color: '#003082',
        paddingBottom: 5,
    },
    dormContact:{
        textAlign: 'auto',
        color: '#003082',
        fontSize: 13,
    },
    ext:{
        textAlign: 'center',
    }

})
export default JayShopData;
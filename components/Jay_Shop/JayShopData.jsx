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
        const docRef = doc(db, "helpful hours" , "jay shop");
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
                    <View style = {{backgroundColor: 'white', paddingHorizontal: 18 , }} >
                        {section.title && 
                        <Title style ={styles.title}>{section.title}</Title>}

                        <View style ={styles.centerNav}>
                            {section.days &&
                            <Text style = {styles.days}>{section.days}</Text>
                            }
                            { section.hours &&
                            <Text style = {styles.hours}>{section.hours}</Text>
                            }
                        </View>
                         
                         {section.contactTitle &&
                        <Title style = {styles.title}>{section.contactTitle}</Title>
                         }
                        {section.email &&
                        <Subheading 
                            onPress = {() => Linking.openURL(`mailto:${section.email}`)}
                            style = {styles.contact}>{section.email}</Subheading>
                        }
                        {section.phone &&
                        <Subheading 
                            onPress = {() => Linking.openURL(`tel:${section.phone}`)}
                            style = {styles.contact}>{section.phone}</Subheading>
                        }
                    </View>
                )}
            />

           
            
       
    </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingTop: 5,
        width: "100%",
       
    },
    title: {
        //textAlign: 'center',
        //fontSize: 17,
        fontWeight: 'bold',
        //paddingTop: 5,
       
        
    },
    contact: {
        textAlign: 'left',
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
    },
    hours :{
        fontSize: 17,
        //textAlign: 'right',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    days: {
        fontSize: 18,
        //textAlign: 'left',
        alignSelf: 'flex-start',
        flexDirection: 'row',


    },
    centerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})
export default JayShopData;
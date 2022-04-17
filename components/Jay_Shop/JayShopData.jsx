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
        const docRef = doc(db, "helpful hours example" , "jay shop hours");
        getDoc(docRef) // get the document
            .then((doc) => {
                setJayShopData(doc.data());
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <View style = {styles.contentContainer}>
        <Text>JLSKDJFLKSDJF</Text>
       <FlatList
                    backgroundColor="transparent"
                    showsVerticalScrollIndicator={false}
                    data={jayShopData}
                    listKey={(item, index) => `_key${index.toString()}`}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    renderItem={({ item: section }) => (
                        <Card>
                            <Title>TEXT</Title>
                        </Card>
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
        paddingBottom: 10
       
        
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
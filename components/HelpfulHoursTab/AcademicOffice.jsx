import React, { useEffect, useState} from 'react';
import { View, FlatList, Text, Linking} from 'react-native';
import { Card, List, Title, Subheading } from 'react-native-paper';

// import Firebase Relative
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

// import StyleSheet 
import styles from './styles';

import { AntDesign } from "@expo/vector-icons";

const AcademicOffice = () => {
    const [academicOffice, setAcademicOffice] = useState([]);
    // useState for List Accordions
    const [expanded, setExpanded] = useState(false); // set this to false, don't want to open automatically
    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        // get AcademicOffice data from firestore
        const docRef = doc(db, "helpful hours" , "academic office");
        getDoc(docRef) // get the document
            .then((doc) => {
                setAcademicOffice(doc.data().sections);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <View style = {styles.contentContainer}>
        <List.Accordion 
            style = {styles.accordion}
            title = "Academic Office"
            theme ={{ colors: {primary: "#003082" , overflow: "hidden", animation: "scale", font: 'medium',}}} // this changes the Text when press to blue
            expanded = {expanded}
            onPress={handlePress} 
            left={props => <List.Icon {...props} icon="book-open" />}
            >
            <FlatList
                data={academicOffice}
                listKey={(item, index) => `_key${index.toString()}`}
                keyExtractor={(item, index) => `_key${index.toString()}`}
                renderItem={({item: section}) => (
                    <Card style = { styles.card}>
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
                         <Subheading 
                            onPress = {() => Linking.openURL(`tel:${section.phone}`)}
                            style = {styles.contact}>Phone: {section.phone}</Subheading>
                    </Card>
                )}
            />

           
            
        </List.Accordion>
       
    </View>
    );
};

export default AcademicOffice;
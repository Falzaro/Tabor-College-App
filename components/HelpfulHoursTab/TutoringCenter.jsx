import React, { useEffect, useState} from 'react';
import { View, FlatList, Text, Linking } from 'react-native';
import { Card, List, Title, Subheading } from 'react-native-paper';

// import Firebase Relative
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

// import StyleSheet 
import styles from './styles';

const TutorCenter = () => {
    const [tutorCenter, setTutorCenter] = useState([]);
    // useState for List Accordions
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        // Get Court Side Grill data from firestore
        const docRef = doc(db, "helpful hours" , "tutoring center");
        getDoc(docRef)
            .then((doc) => {
                setTutorCenter(doc.data().sections);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <View style = {styles.contentContainer}>
            <List.Accordion 
                style = {styles.accordion}
                title = "Tutoring Center"
                theme ={{ colors: {primary: "#003082", animation: "scale", font: 'medium'}}} // this changes the Text when press to blue
                expanded = {expanded}
                onPress={handlePress} 
                left={props => <List.Icon {...props} icon="desk-lamp" />}
                >
                <FlatList
                    data={tutorCenter}
                    listKey={(item, index) => `_key${index.toString()}`}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    renderItem={({item: section}) => (
                        <Card style = { styles.card}>
                            <Title style = {styles.header}>{section.title}</Title>
                            <Text style = {styles.location}>({section.location})</Text>
                            <FlatList 
                                listKey={(item, index) => `_key${index.toString()}`}
                                keyExtractor={(item, index) => `_key${index.toString()}`} // since firestore have two child w/ same, set id so it don't cause problem
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
                                <Title style = {styles.header}>Link:</Title>
                            <Subheading 
                                onPress = {() => Linking.openURL(section.url)}
                                style ={{fontSize: 13, color: '#003082', textAlign: 'center'}}> {section.url}</Subheading>
                        </Card>
                    )}
                />

               
                
            </List.Accordion>
           
        </View>
    );
};

export default TutorCenter;

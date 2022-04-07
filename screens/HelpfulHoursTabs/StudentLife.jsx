import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';

import { List } from 'react-native-paper';
import { db } from "../../firebase/config";
import { doc, getDoc, collection } from "firebase/firestore";
import styles from './styles';
import { Card, Title, Subheading, Paragraph } from "react-native-paper";

const StudentLife = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [studentLife, setStudentLife] = useState([]);

  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "helpful hours", "student life");
    getDoc(docRef)
        .then((doc) => {
          setStudentLife(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <List.Section >
      <List.Accordion 
        style={{ backgroundColor: 'white' }}
        title="Student Life"
        titleStyle={{ fontSize: 15 }}
        /*right={props => <List.Icon {...props} icon="chair-school" />} */
        >
      <View style ={styles.background}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            
            data={studentLife}
            contentContainerStyle={styles.contentContainer}
            listKey={(item, index) => `_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            renderItem={({ item: section }) => (
                <View style={{backgroundColor: 'white'}}>
                  <Title style={styles.title}>{section.location}</Title>
                <Title style={styles.title}>{section.title}</Title>
                {/* extract days and hours data */}
                <FlatList
                        keyExtractor={(item, index) => item + index}
                          data={section.data}
                          renderItem={({ item }) => (
                            <View style={styles.displayItem}>
                              <Subheading style={styles.subheading} key={item}>{item}</Subheading>
                            </View>
                          )}
                />
                {/* extract names, emails, and phone  */}
                  <Text  style={styles.names}>{section.name}</Text>
                  <Text  style={styles.contacts} onPress={() => Linking.openURL(`mailto:{section.email}`)}>{section.email}</Text>
                  <Text  style={styles.contacts} onPress={() => Linking.openURL(`mailto:{section.email}`)}>{section.email1}</Text>
                  <Text  style={styles.contacts} color= "blue" onPress={() => Linking.openURL(`tel:${section.phone}`)}>{section.phone}</Text>
                  <Text style ={{textAlign: "center", fontSize: 17}}>{section.ext}</Text>
                </View>
                
            )}
        />
      </View>
      </List.Accordion>
     
    </List.Section>
  );
};

export default StudentLife;
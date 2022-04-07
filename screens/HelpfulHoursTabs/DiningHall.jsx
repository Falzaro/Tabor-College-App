import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';
import { List } from 'react-native-paper';

import { db } from "../../firebase/config";
import { doc, getDoc, collection } from "firebase/firestore";

import styles from './styles';
import {  Title, Subheading } from "react-native-paper";

const DinningHall = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [diningHall, setDinningHall] = useState([]);

  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "helpful hours", "dining hours");
    getDoc(docRef)
        .then((doc) => {
            setDinningHall(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <List.Section >
       <List.Accordion 
        style={{ backgroundColor: 'white' }}
        title="Dinning Hall"
       /* right={props => <List.Icon {...props} icon="office-building" />} */
       >
      <View style ={styles.background}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            data={diningHall}
            contentContainerStyle={styles.contentContainer}
            listKey={(item, index) => `_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            renderItem={({ item: section }) => (
                <View style={{ backgroundColor: "white"}}>
                  <Title style={styles.otherText}>{section.location}</Title>
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
                  
                  <Text  style={styles.contacts} onPress={() => Linking.openURL(`mailto:{section.email}`)}>{section.email}</Text>
                </View>
                
            )}
        />
      </View>
      </List.Accordion>


     
    </List.Section>
  );
};

export default DinningHall;
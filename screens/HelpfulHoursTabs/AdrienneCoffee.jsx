import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';
import { List } from 'react-native-paper';

import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";



import styles from './styles';
import {  Title, Subheading } from "react-native-paper";

const AdrienneCoffee = () => {
 
  const [adrienneCoffee, setAdrienneCoffee] = useState([]);
  

  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "helpful hours", "adrienne coffee shop");
    getDoc(docRef)
        .then((doc) => {
            setAdrienneCoffee(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <List.Section >
       <List.Accordion 
        style={{ backgroundColor: 'white' }}
        title="Adrienne Coffee Shop"
        titleStyle={{ fontSize: 15 }}
       /*  right={props => <List.Icon {...props} icon="office-building" />} */
       >
      <View style = {styles.contentContainer}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            data={adrienneCoffee}
            listKey={(item, index) => `_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            renderItem={({ item: section }) => (
                <View style={styles.innerBackground}>
                  <Title style={styles.renderTitle}>{section.title}</Title>
                 
                {/* extract days and hours data */}
                <FlatList
                        keyExtractor={(item) => item}
                          data={section.data}
                          renderItem={({ item }) => (
                            <View style={styles.displayItem}>
                              <Text style={styles.dataRender} key={item}>{item}</Text>
                            </View>
                          )}
                />
                {/* extract names, emails, and phone  */}
            
                <Text style={styles.renderEmail} onPress={() => Linking.openURL(`mailto:{section.email}`)}>{section.email}</Text>
                </View>
                
            )}
        />
      </View>
      </List.Accordion>


     
    </List.Section>
  );
};

export default AdrienneCoffee;
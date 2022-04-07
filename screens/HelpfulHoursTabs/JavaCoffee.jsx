import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';
import { List } from 'react-native-paper';

import { db } from "../../firebase/config";
import { doc, getDoc, collection } from "firebase/firestore";

import styles from './styles';
import {  Title, Subheading } from "react-native-paper";

const JavaCoffee = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [javaCoffee, setJavaCoffee] = useState([]);

  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "helpful hours", "java jays coffee shop");
    getDoc(docRef)
        .then((doc) => {
            setJavaCoffee(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <List.Section >
       <List.Accordion 
        style={{ backgroundColor: 'white' }}
        title="Java Jays Coffee Shop"
       /* right={props => <List.Icon {...props} icon="office-building" />} */
       >
      <View style ={styles.background}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            listKey="2.0"
            data={javaCoffee}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.title}
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

export default JavaCoffee;
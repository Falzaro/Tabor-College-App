import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';
import { List } from 'react-native-paper';

import { db } from "../../firebase/config";
import { doc, getDoc, collection } from "firebase/firestore";

import styles from './styles';
import { Card, Title, Subheading, Paragraph } from "react-native-paper";

const BusinessOffice = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [businessOffice, setBusinessOffice] = useState([]);

  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "business office", "information");
    getDoc(docRef)
        .then((doc) => {
          setBusinessOffice(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <List.Section >
       <List.Accordion 
        listKey = "1.1"
        style={{ backgroundColor: 'white' }}
        title="Business Office"
        titleStyle={{ fontSize: 15 }}
       /* right={props => <List.Icon {...props} icon="office-building" />} */ >
      <View style ={{backgroundColor: 'white'}}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            listKey="1.1"
            data={businessOffice}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.title}
            renderItem={({ item: section }) => (
                <View style={styles.card}>
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

export default BusinessOffice;
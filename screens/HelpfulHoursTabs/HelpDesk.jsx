import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';

import { List } from 'react-native-paper';
import { db } from "../../firebase/config";
import { doc, getDoc, collection } from "firebase/firestore";

import styles from './styles';
import { Card, Title, Subheading, Paragraph } from "react-native-paper";

const HelpDesk = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [helpDeskHours, setHelpDeskHours] = useState([]);

  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "helpdesk hours", "information");
    getDoc(docRef)
        .then((doc) => {
          setHelpDeskHours(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <List.Section>
      <List.Accordion 
        style={{ backgroundColor: 'white', }}
        title="Help Desks"
        titleStyle={{ fontSize: 15 }}
       /* right={props => <List.Icon {...props} icon="remote-desktop" />}*/>
      <View style ={styles.background}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            listKey="1.3"
            data={helpDeskHours}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.title}
            renderItem={({ item: section }) => (
                <View style={{ backgroundColor: 'white'}}>
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
                  <Text  style={styles.contacts} color= "blue" onPress={() => Linking.openURL(`tel:${section.phone}`)}>{section.phone}</Text>
                </View>
                
            )}
        />
      </View>
      </List.Accordion>

      
    </List.Section>
  );
};

export default HelpDesk;


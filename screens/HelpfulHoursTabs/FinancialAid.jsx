import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking } from 'react-native';
import { List } from 'react-native-paper';
import styles from "../HelpfulHoursTabs/styles";

import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

import { Title, Subheading } from "react-native-paper";


const FinancialAid = () => {
  
  {/*Contact information and Hours will be manually updated through firestore */}

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const [financialAid, setFinancialAid] = useState([]);
  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "helpful hours", "financial aid");
    getDoc(docRef)
        .then((doc) => {
            setFinancialAid(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);


  return (
    <List.Section>
      <List.Accordion 
        style={{ backgroundColor: 'white', }}
        title="Financial Aid office hours"
        
        titleStyle={{ fontSize: 15 }}
       /* left={props => <List.Icon {...props} icon="school-outline" />}*/
       > 
      <View style ={styles.background}>
       {/*unique identifier key for each flatlist */}
        <FlatList
            data={financialAid}
            contentContainerStyle={styles.contentContainer}
            listKey={(item, index) => `_key${index.toString()}`}
            keyExtractor={(item, index) => `_key${index.toString()}`}
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
                  
                  <Text  style={styles.contacts} onPress={() => Linking.openURL(`mailto:{section.email}`)}>{section.email}</Text>
                 {/* <Text  style={styles.contacts} color= "blue" onPress={() => Linking.openURL(`tel:${section.phone}`)}>{section.phone}</Text> */ }
                </View>
                
            )}
        />
      </View>
      </List.Accordion>

    </List.Section>
  );
};

export default FinancialAid;


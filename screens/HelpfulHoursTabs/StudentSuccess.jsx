import * as React from 'react';
import { useEffect, useState } from "react";
import  { View, FlatList, } from 'react-native';
import { List } from 'react-native-paper';
import styles from "../HelpfulHoursTabs/styles";

import { db } from "../../firebase/config";
import { doc, getDoc, collection } from "firebase/firestore";

import { Card, Title, Caption } from "react-native-paper";



const StudentSuccess = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [studentSuccess, setStudentSuccess] = useState([]);
  useEffect(() => {
    // Get the cafe menu from firebase version 9
    const docRef = doc(db, "student success", "information");
    getDoc(docRef)
        .then((doc) => {
          setStudentSuccess(doc.data().sections);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);


  return (
    <List.Section>
      <List.Accordion
        title="Student Success"
        right={props => <List.Icon {...props} icon="school-outline" />}>
      <View style ={styles.background}>
      <FlatList
            data={studentSuccess}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.title}
            renderItem={({ item: section }) => (
                <Card style={styles.card}>
                <Title style={styles.title}>{section.title}</Title>
                    <FlatList
                        keyExtractor={(item, index) => item + index}
                          data={section.data}
                          renderItem={({ item }) => (
                            <View style={styles.displayItem}>
                              <Caption key={item}>{item}</Caption>
                            </View>
                          )}
                    />
                </Card>
            )}
      />
      </View>
      </List.Accordion>

    </List.Section>
  );
};

export default StudentSuccess;


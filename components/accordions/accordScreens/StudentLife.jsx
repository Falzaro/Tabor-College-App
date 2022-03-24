import * as React from 'react';
import { List } from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';

const StudentLife = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion
        title="Student Life"
        left={props => <List.Icon {...props} icon="chair-school" />}>
        <View>
        <List.Item title="Contact Information"/>
        <Text>Phone Number: 0000-1234-1234</Text>
        </View> 
      </List.Accordion>

     
    </List.Section>
  );
};

export default StudentLife;
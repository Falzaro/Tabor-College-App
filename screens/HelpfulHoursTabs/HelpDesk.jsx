import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { List } from 'react-native-paper';
import styles from './styles';

const HelpDesk = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Help Desks"
        right={props => <List.Icon {...props} icon="remote-desktop" />}>
        <View style ={styles.background} >
        <List.Item title="First item"  />
        <List.Item title="Second item" />
        </View>
      </List.Accordion>

      
    </List.Section>
  );
};

export default HelpDesk;


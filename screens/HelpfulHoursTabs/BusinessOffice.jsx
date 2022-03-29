import * as React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

import styles from './styles';

const BusinessOffice = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion
          title="Business Office"
          right={props => <List.Icon {...props} icon="office-building" />}>
       <View style ={styles.background} >
          <List.Item title="First item"  />
          <List.Item title="Second item" />
        </View>
      </List.Accordion>

     
    </List.Section>
  );
};

export default BusinessOffice;
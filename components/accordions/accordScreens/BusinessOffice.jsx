import * as React from 'react';
import { List } from 'react-native-paper';



const BusinessOffice = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion
        title="Business Office"
        left={props => <List.Icon {...props} icon="office-building" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

     
    </List.Section>
  );
};

export default BusinessOffice;
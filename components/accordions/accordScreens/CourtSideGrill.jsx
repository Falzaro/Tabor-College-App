import * as React from 'react';
import { List } from 'react-native-paper';

const CourtSideGrill = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Court Side Grill"
        left={props => <List.Icon {...props} icon="grill-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

     
    </List.Section>
  );
};

export default CourtSideGrill;
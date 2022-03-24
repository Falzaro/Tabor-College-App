import * as React from 'react';
import { List } from 'react-native-paper';

const HelpDesk = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Help Desks"
        left={props => <List.Icon {...props} icon="remote-desktop" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      
    </List.Section>
  );
};

export default HelpDesk;
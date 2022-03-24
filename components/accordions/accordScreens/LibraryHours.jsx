import * as React from 'react';
import { List } from 'react-native-paper';

const LibraryHours = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion
        title="Library Hours"
        left={props => <List.Icon {...props} icon="library" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default LibraryHours;
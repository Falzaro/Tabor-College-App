import * as React from 'react';
import { List } from 'react-native-paper';

const StudentSuccess = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Student Success"
        left={props => <List.Icon {...props} icon="school-outline" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

    </List.Section>
  );
};

export default StudentSuccess;
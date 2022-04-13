import React, { useState} from 'react';
import { View, FlatList, Text, Linking, StyleSheet} from 'react-native';
import { Card, List, Title, Subheading } from 'react-native-paper';

const DropDownTab = ({section}) => {

    // useState for List Accordions
    const [expanded, setExpanded] = useState(false); // set this to false, don't want to open automatically
    const handlePress = () => setExpanded(!expanded);

    return (
        <View style = {styles.contentContainer}>
            <List.Accordion
                style = {styles.accordion}
                title = {section.title}
                theme ={{ colors: 
                    {primary: "#003082" , 
                    overflow: "hidden", 
                    animation: "scale", 
                    }
                }} // this changes the Text when press to blue
                expanded = {expanded}
                onPress={handlePress} 
                >
                <Card style = { styles.card}>
                <Title style = {styles.title}>Hours:</Title>
                <Text style = {styles.location}>({section.location})</Text>
                <FlatList
                    showsVerticalScrollIndicator = {false}
                    listKey={(item, index) => `_key${index.toString()}`}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    data={section.data}
                    renderItem={({item}) => (
                        <View style = {styles.items}>
                            <Subheading style = {styles.text}>{item}</Subheading>
                        </View>
                    )}
                />
                </Card>

                {/* This section is still working, wondering how i can call in contact information in a good way */}
                <List.Section>
                <Card>
                    <Title style = {styles.title}>Contact Information:</Title>
                    <Subheading 
                        onPress = {() => Linking.openURL(`tel:${section.phone}`)}
                        style = {styles.contact}> {section.phone}
                    </Subheading> 
                    <Subheading 
                        onPress = {() => Linking.openURL(`mailto:${section.email}`)}
                        style = {styles.contact}> {section.email}
                    </Subheading>
                    <Subheading 
                        onPress = {() => Linking.openURL(`mailto:${section.email1}`)}
                        style = {styles.contact} > {section.email1}
                    </Subheading>
                    <Subheading 
                        onPress = {() => Linking.openURL(`mailto:${section.email2}`)}
                        style = {styles.contact}> {section.email2}
                    </Subheading>
                    </Card>
                </List.Section>
            </List.Accordion>
        </View>
    );
      
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingTop: 5,
        width: "100%",
        backgroundColor: "transparent",
    },
    accordion:{
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        paddingLeft: 0,
        padding: 8,
     },
    card: {
        marginTop: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    items: {
        alignItems: 'center',
        marginTop: 5,
    },
    contact: {
        textAlign: 'center',
        color: '#003082',
    },
    title: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    text: {
        textAlign: 'center',
    },
    location: {
        textAlign: 'center',
    },
})

export default DropDownTab;
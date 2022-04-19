import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";
import Main from "../components/Main";
import { Card, Title, Subheading} from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';

import LibraryData from '../components/library_screen/LibraryData';

// set Locations
const latitude = "38.34882";
const longitude = "-97.201";
const label = "Tabor College Library, 400 S Jefferson St, Hillsboro, KS 67063";

// this detect if Phones installed Maps and open Automatically 
const url = Platform.select({
  ios: "maps:" + latitude + "," + longitude + "?q=" + label,
  android: "geo:" + latitude + "," + longitude + "?q=" + label
});

function Library({ route }) {
    const { name } = route;
    const libraryCover = require("../assets/coverImage/library.jpg");
    const coverImage = {
        source: libraryCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 1,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <Card style = {styles.card}>
                    <Title style = {styles.title}>Welcome to Tabor Library</Title>
                    <View>
                    <TouchableOpacity style={styles.buttonPress} onPress = {() => Linking.openURL(url)}>
                        <EvilIcons style ={styles.icons} size={30} color = "#003082" name ="location"/> 
                        <Subheading style = {styles.textLocation}>Location</Subheading>
                    </TouchableOpacity>
                    </View>
                </Card>
                <LibraryData />
            </View>
        </Main>
    );
}

export default Library;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingHorizontal: 18,
        marginTop: 10, 
    },
    buttonPress:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    icons:{
        alignSelf: 'flex-end',
        
    },
    textLocation:{
        color: "#003082",
        //fontSize: 18,
        fontStyle: "italic",
    },
    title: {
        marginLeft: 10,
        textAlign: 'center',
    },
    card: {
        //borderColor: '#003082',
       // borderWidth: 1
    }
});

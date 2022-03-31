
import { useEffect, useState } from "react";
import  { View, FlatList, Text, Linking, StyleSheet, Image } from 'react-native';
import Main from "../components/Main";


// Relative Imports
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Card, Title, Caption } from "react-native-paper";

function Jayshop({ route }) {
    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
   

    const [jayshop, setJayshop] = useState([]);
    useEffect(() => {
        // Get the  from firebase version 9
        const docRef = doc(db, "products", "testing data2");
        getDoc(docRef)
           
            .then((doc) => {
                 console.log(doc.data());
                setJayshop(doc.data().sections);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
            <Text>Testing Testing</Text>
            
           <FlatList 
               listKey="1.0"
               data={jayshop}
               keyExtractor = {(item) => item.id}
               renderItem = {({ item: section }) => (
                   <View>
                    <Image style = {{width: 100, height: 100}} source = {{uri: section.image}}/>
                    <Text>{section.text}</Text>
                   </View>
               )}
           />
                 
            
            </View>
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

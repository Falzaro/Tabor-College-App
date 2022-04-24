import React, { useEffect, useState } from "react";
import { Linking, StyleSheet, View, Text } from "react-native";
import { Button, Title } from 'react-native-paper';

import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore";

const StudentLifeContact = () => {
    const [getContactInfo, setContactInfo] = useState([]);

    useEffect(() => {
        // get Jay Shop data from Firestore
        const docRef = doc(db, "helpful hours example", "student life");
        getDoc(docRef)
            .then((doc) => {
                const data = doc.data();
                setContactInfo(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

  const {"Contact information": contactInfos} = getContactInfo;

    return (
        <View style ={styles.container}>
            <Title style = {styles.title}>Contact Us</Title>
           
            <Button 
                dark
                compact 
                contentStyle = {styles.button}
                color = "#0071ce" 
                icon="email" 
                onPress={() => Linking.openURL(`mailto:${contactInfos?.email2}`)}>
                    {contactInfos?.email2}
            </Button>
          
            <Button 
                dark
                compact 
                contentStyle = {styles.button}
                color = "#0071ce" 
                icon="phone" 
                onPress={() => Linking.openURL(`tel:${contactInfos?.phone}`)}>
                    {contactInfos?.phone}
            </Button>
                           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 5
    },
    button:{
        justifyContent: "space-between",
    },
    title:{
        color: "#0071ce",
        fontSize: 19,
    }
})

export default StudentLifeContact;
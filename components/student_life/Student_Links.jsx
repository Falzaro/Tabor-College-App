import React from 'react';
import { useEffect, useState } from "react";
import { Linking, StyleSheet, View, FlatList } from "react-native";
import { Card, Divider, Title, Button, Headline  } from "react-native-paper";

import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore";


const StudentLinks = () => {
    const [studentLinks, setStudentLinks] = useState([]);
    const [value, setValue] = React.useState('left');
    useEffect(() => { 
       const docRef = doc(db, "student life links", "student life links");
         getDoc(docRef)
            .then((doc) => { 
                const data = doc.data();
                setStudentLinks(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Card style = {styles.container}>
        <View style={styles.studentBanner}>
            <View style={styles.divider} />
            <Title style={styles.headline}>Student Life</Title>
            <View style={styles.divider} />
        </View>
           <FlatList  
                    showsVerticalScrollIndicator={false}
                    listKey={(_, index) => `_key${index}`}
                    keyExtractor={(_, index) => `_key${index}`}
                    data={studentLinks.sections}
                    renderItem={({ item }) => (
                        <View style = {styles.buttonsRow}>
                           
                            {Boolean(item.title)  && ( //Checks && Prevent empty data from rendering
                            <Button 
                                dark
                                mode = 'contained'
                                compact 
                                contentStyle = {styles.button}
                                color = "#0071ce" 
                                icon="open-in-new" 
                                onPress={() => Linking.openURL(item.links)}>
                            {item.title}
                            </Button>
                            )}
                                                    
                        </View>
                    )}
                />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    buttonsRow: {
     //   flexDirection: "row",
     marginBottom: 5,
     paddingHorizontal: 18,
        
    },
    divider: {
        flex: 1,
        height: 1.5,
        backgroundColor: "#0071ce",
    },
    studentBanner: {
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headline: {
        color: "#0071ce",
        marginHorizontal: 20,
    },
    button: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    }
  
   
})

export default StudentLinks;
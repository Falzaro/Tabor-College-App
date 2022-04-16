import React, { useState, useEffect } from 'react';
import { Image, View, Linking,  StyleSheet, Text,  TouchableOpacity, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, Title, } from 'react-native-paper';



// Relative Imports
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const JayShopCarousel = () => {
    const [getImage, setImage] = useState([]);
    useEffect(() => {
        // Get the  from firebase version 9
        const docRef = doc(db, "products", "testing data3");
        getDoc(docRef)
           
            .then((doc) => {
                setImage(doc.data().sections);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <View style={styles.center}>
            <View>
                <Title style ={{fontWeight: "bold", paddingBottom: 10}}>Available Products:</Title>
            </View>
        <View style={styles.carouselLayout}>

            <Carousel 
                layout = {'default'}
                panGestureHandlerProps={{
                activeOffsetX: [-10, 10], }}
                data={getImage}
                decelerationRate = 'fast'
                horizontal
                sliderWidth={400}
                itemWidth={300}
                renderItem = {({ item: section }) => (
                 <Card style = {styles.card}>
             
                    <Image style = {styles.imageLayout} source = {{uri: section.image}}/>
                    <Text style = {styles.text}>{section.price}</Text>
                    <Text style = {styles.text}>{section.text}</Text>
                </Card>
            )}
            />
        </View>
            <Button
                style={styles.button}
                title = {'View More'}
                onPress={() => Linking.openURL('https://tabor.edu/shop/')}/>
            
         </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        borderRadius: 5,
        overflow: 'hidden',
    },
    carouselLayout: {
        flexDirection:'row', 
        alignItems: 'center',
       shadowOpacity: 0.5,
       justifyContent: "center",
       
        
    },
    imageLayout: {
        width:300,
        height: 300,
        borderRadius: 5,
        alignItems: 'center',
        resizeMode: 'contain',
        justifyContent: "center",
       
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
        
    },
    button:{
        paddingTop: 15,
        marginBottom: 15
    },
    card:{
        width: 300, 
        height:350, 
        backgroundColor: 'white', 
    }
   
});

export default JayShopCarousel;
import React, { useState, useEffect } from 'react';
import { Image, Animated, FlatList, View, Linking, Alert, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Card, List, Title, Subheading } from 'react-native-paper';



// Relative Imports
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const JayShopCarousel = () => {
    const [getImage, setImage] = useState([]);
    useEffect(() => {
        // Get the  from firebase version 9
        const docRef = doc(db, "products", "testing data2");
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
             <Title style ={{fontWeight: "bold", paddingBottom: 10}}>Products on Sales:</Title>
        <View style={styles.carouselLayout}>
          
            <Carousel 
                layout = {'default'}
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL('https://tabor.edu/shop/')}>
                        
                <Text style = {{color: '#003082', fontSize: 20}}>Official Shop</Text>
            </TouchableOpacity>
         </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 5,
        borderRadius: 5,
        overflow: 'hidden',
      

    },
    carouselLayout: {
        flexDirection:'row', 
        alignItems: 'center',
       // backgroundColor: 'white',
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
        alignItems: 'center', 
        resizeMode: 'contain', 
        justifyContent: 'center'
    }
   
});

export default JayShopCarousel;
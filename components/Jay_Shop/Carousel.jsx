import React, { useState, useEffect } from 'react';
import { Image, Animated, FlatList, View, StatusBar, Dimensions, StyleSheet, Text, SafeAreaView } from 'react-native';
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
             <Title style ={{fontWeight: "bold"}}>Products on sales:</Title>
        <View style={styles.carouselLayout}>
          
            <Carousel 
                layout = {'default'}
                data={getImage}
                decelerationRate = 'fast'
                horizontal
                sliderWidth={360}
                itemWidth={250}
                renderItem = {({ item: section }) => (
                 <Card style = {{width: 250, height:300, backgroundColor: 'white', alignItems: 'center', resizeMode: 'contain', }}>
             
                    <Image style = {styles.imageLayout} source = {{uri: section.image}}/>
                    <Text style = {styles.text}>{section.price}</Text>
                    <Text style = {styles.text}>{section.text}</Text>
                </Card>
                
            )}
            
            />
        </View>
        
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
        overflow: 'hidden'

    },
    carouselLayout: {
        flexDirection:'row', 
        alignItems: 'center',
       // backgroundColor: 'white',
       shadowOpacity: 0.27
       
        
    },
    imageLayout: {
        width:250,
        height: 250,
        borderRadius: 5,
        alignItems: 'center',
        resizeMode: 'contain',
       
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
    }
   
});

export default JayShopCarousel;
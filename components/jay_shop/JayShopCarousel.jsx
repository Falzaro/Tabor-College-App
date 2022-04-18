import React, { useState, useEffect } from 'react';
import { Image, View, Linking,  StyleSheet, ImageBackground,  TouchableOpacity, Button, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, Title, Subheading } from 'react-native-paper';

// Relative Imports
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const linkUrl =  'https://tabor.edu/shop/' 

const JayShopCarousel = () => {
    const [getImage, setImage] = useState([]);

    useEffect(() => {
        // Get the  from firebase version 9
        const docRef = doc(db, "products", "testing data3");
        getDoc(docRef)
           
            .then((doc) => {
                const data = doc.data().sections;
                setImage(data);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (

        <View style = {styles.container}>
        
            <Title style ={styles.title}>Available Products:</Title>

            <Carousel 
                layout = {'default'}
                data = {getImage}
                enableSnap = {true} // this must be true for " loop " to work
                loop // this set item in a loop 
                decelerationRate = 'fast'
                autoplay	  // item will automatically play
                useScrollView={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={({ item: section }) => (
                    <View style ={styles.card}>  
                    <Image style = {styles.imageLayout} source = {{uri: section.image}} />
                    <Subheading style={styles.price}>{section.price}</Subheading>
                    <Subheading style ={styles.name}>{section.name}</Subheading>
                    </View>
                   
                )}
            />
            <TouchableOpacity style = {styles.button}   onPress={() => Linking.openURL(linkUrl)}>
                <Subheading style = {styles.buttonText}>View More</Subheading>
            </TouchableOpacity>
       
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        marginTop: 5,
        overflow: 'hidden',
        alignItems: "center",
        borderRadius: 5,
    },
    imageLayout:{
        width:200,
        height: 200,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 5,
        borderColor: "#f7d117",
        borderWidth: 1,

    },
    title:{
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    price:{
        alignItems: "center",
        paddingHorizontal: 10,
        color: 'white',
    },
    card:{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#003082",
        borderColor: "#f7d117",
        borderWidth: 1,
      
    },
    button: {
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#003082",
        borderRadius: 5,
        
    },
    buttonText:{
        color: '#003082',
        fontSize: 20,
        color: 'white',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
    },
   name:{
        textAlign: "center",
        color: 'white',
        paddingHorizontal: 10,
        
   },
  
   
   

})
export default JayShopCarousel;
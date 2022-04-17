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

const image = {uri: "https://tabor.edu/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Ftabor.edu%2Fwp-content%2Fthemes%2Ftabor-theme%2Fassets%2Fimg%2Fhome-footer.jpg&cacheMarker=1554954396-93644&token=ac3057f43d6d5d49"};

const JayShopCarousel = () => {
    const [getImage, setImage] = useState();

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
        <View style = {styles.container}>
            <Title style ={styles.title}>Available Products:</Title>

            <Carousel 
                layout = {'default'}
                data={getImage}
                decelerationRate = 'fast'
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
            <TouchableOpacity style = {styles.button}   onPress={() => Linking.openURL('https://tabor.edu/shop/')}>
                <Subheading style = {styles.buttonText}>View More</Subheading>
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        marginTop: 5,
        overflow: 'hidden',
        alignItems: "center",
        borderRadius: 5,
    },
    imageLayout:{
        width:150,
        height: 150,
        borderRadius: 5,
        shadowOpacity: 0.5,
        justifyContent: 'center',
     
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
    },
    card:{
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.5,
        borderRadius: 5,
       // paddingRight: 18,
      
    },
    button: {
        alignItems: "center",
        marginBottom: 5,
        
    },
    buttonText:{
        color: 'blue',
        fontSize: 20,
    },
   name:{
       textAlign: "center",
   }
   

})
export default JayShopCarousel;
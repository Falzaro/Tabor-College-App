import React, { useState, useEffect } from 'react';
import { Image, Animated, FlatList, View, StatusBar, Dimensions, StyleSheet, Text } from 'react-native';


const {width, height} = Dimensions.get('window');

const ITEM_WIDTH = 200;
const ITEM_HEIGHT = 200;

// Relative Imports
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import { Card, Title, Caption } from "react-native-paper";


const DOT_SIZE = 8;
const DOT_SPACING = 8;

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

   

    const scrollY = React.useRef(new Animated.Value(0)).current;
    
    return (
        <View style={styles.center}>
           
        <View style ={{ overflow: 'hidden', marginTop: 10, padding: 10}}>

        <Animated.FlatList 
             data={getImage}
             listKey={(item, index) => `_key${index.toString()}`}
             keyExtractor={(item, index) => `_key${index.toString()}`}
             snapToInterval = {ITEM_HEIGHT}
             decelerationRate = 'fast'
             pagingEnabled
             horizontal
             showsVerticalScrollIndicator = {false}
             showsHorizontalScrollIndicator = {false}
             bounces = {false}
             onScroll = {Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {useNativeDriver: true})}
             renderItem = {({ item: section }) => (
                 <Card style = {{padding:5}}>
                 <Image style = {styles.imageLayout} source = {{uri: section.image}}/>
                 <Text>{section.price}</Text>
                 <Text>{section.text}</Text>
                </Card>
            )}
        />
           <View style = {styles.pagination}>
               {getImage.map((item, index) => {
                   return (
                       <View  key = {index} styles = {[styles.dot]}/>
                   )
               })}
           </View> 
           
        </View>
        
         </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,

    },
    imageLayout: {
        alignItems: "center",
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        resizeMode: 'cover',
    },
    pagination: {
        position: 'absolute',
        top: ITEM_HEIGHT /2,
        left: 20,
    },
    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        backgroundColor: 'blue',
        marginBottom: DOT_SPACING,
    },
});

export default JayShopCarousel;
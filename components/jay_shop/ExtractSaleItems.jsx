import React, { useState, useEffect } from 'react';
import { Image, View, Text,  StyleSheet, ImageBackground,  TouchableOpacity, Button, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, Title, Subheading } from 'react-native-paper';

import styles from './styles';
// Relative Imports
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);


const SalesItem = () => {
    const [salesItem, setSalesItem] = useState([]);
    useEffect(() => {
        // Get the  from firebase version 9
        const docRef = doc(db, "products", "testing data2");
        getDoc(docRef)

            .then((doc) => {
                const data = doc.data().sections;
                setSalesItem(data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return(
        <View>
            <Title style ={{textAlign: "center", fontWeight:"bold", fontSize: 18,}}>Item on Sales!</Title>
             <Carousel 
                layout = {'stack'}
                data = {salesItem}
                enableSnap = {true} // this must be true for " loop " to work
                loop // this set item in a loop 
                decelerationRate = 'fast'
                autoplay      // item will automatically play
                useScrollView={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={({ item: section }) => (
                    <View style ={styles.card}>
                        <Image style = {styles.imageLayout} source = {{uri: section.image}} />
                        <Subheading style={styles.price}>{section.price}</Subheading>
                        <Subheading style ={styles.name}>{section.text}</Subheading>
                    </View>

                )}
            />

        </View>
    )
}


export default SalesItem;
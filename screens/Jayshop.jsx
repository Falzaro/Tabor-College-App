import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Linking, ImageBackground , TouchableOpacity} from "react-native";
import Main from "../components/Main";

import { Card, List, Title, Subheading, } from 'react-native-paper';

import JayShopCarousel from '../components/jay_shop/JayShopCarousel';
import JayShopHours from '../components/jay_shop/JayShopHours';

const image = {uri: "https://tabor.edu/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Ftabor.edu%2Fwp-content%2Fthemes%2Ftabor-theme%2Fassets%2Fimg%2Fhome-footer.jpg&cacheMarker=1554954396-93644&token=ac3057f43d6d5d49"};

const linkUrl =  'https://tabor.edu/shop/' 

function Jayshop({ route }) {


    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
          <ImageBackground source ={image} style={styles.image}  >  
            <View style={styles.container}>
                <JayShopCarousel />
                <JayShopHours />

                <View style ={styles.buttonView}>
                    <TouchableOpacity style = {styles.button}   onPress={() => Linking.openURL(linkUrl)}>
                    <Subheading style = {styles.buttonText}>View More</Subheading>
                
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 18,
    },
    image: {
        width: "100%",
        height: "100%",
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
    buttonView: {
        paddingHorizontal: 150,
        paddingBottom: 10,
    },

});

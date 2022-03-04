import React, { useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Alert, TouchableOpacity, Linking} from 'react-native';
import ButtonLabel from '../components/SettingButtonLabel.js';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import Foundation from 'react-native-vector-icons/Foundation';



const MenuScreen = ({title}) => {

    return (
        <View style = {styles.screen} >
            {/* Setting up Image Header */}
        <View  style = {styles.coverImage} >
            
            <ImageBackground 
                 style = {{width: '100%', height: '100%',}} blurRadius = {3}
                source = {require('../assets/MenuHeader.jpg')} >

             {/* Setting up Text Header */}
             <View style = {styles.textView} >  
                <Text style = {styles.imageText}>{title}</Text>
            </View>
            </ImageBackground>
        </View>
        
        <View style = {styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://tabor.instructure.com/login/ldap')}>
                <Image style={styles.imageIcon} width="50%" height="50%" source = {require('../assets/Canvas-Logo.png')}/>
                <Text style={styles.buttonText}>Canvas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <Ionicons name="people" size = {50} color="#003082" />
                <Text style={styles.buttonText}>Student Life</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <MaterialIcons name="local-dining" size={50} color="#003082" />
                <Text style={styles.buttonText}>Dining</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <Ionicons name="cafe" size={50} color="#003082" />
                <Text style={styles.buttonText}>Campus Cafe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <FontAwesome5 name="calendar" size={50} color="#003082" />
                <Text style={styles.buttonText}>Calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <MaterialCommunityIcons name="shopping-outline" size={50} color="#003082" />
                <Text style={styles.buttonText}>Jayshop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <FontAwesome5 name="map-marked-alt" size={50} color="#003082" />
                <Text style={styles.buttonText}>Maps</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <Ionicons name="american-football" size={50} color="#003082" />
                <Text style={styles.buttonText}>Sports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <MaterialCommunityIcons name="account-clock-outline" size={50} color="#003082" />
                <Text style={styles.buttonText}>Helpful Hours</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <FontAwesome name="newspaper-o" size={50} color="#003082" />
                <Text style={styles.buttonText}>News</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                <Ionicons name="notifications-outline" size={40} color="#003082" />
                <Text style={styles.buttonText}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} >
                <Foundation name="credit-card" size={40} color="#003082" />
                <Text style={styles.buttonText}>Notifications</Text>
            </TouchableOpacity>
        </View>
            {/*Setting Button and Customize Navigation Bar */}
        <View>
            <ButtonLabel text="Setting" />
        </View>
        </View>
      
       

    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //alignItems: 'baseline',
        backgroundColor: '#E5E5E5', // or #E5E5E5
    },
    coverImage: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    imageText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    textView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 80,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 30,
        flexWrap: 'wrap',
    },
    button: {
        display: 'flex',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    text : {
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    buttonText: {
        alignSelf: 'stretch',
        display: 'flex',
        fontSize: 14,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    imageIcon: {
        width: 50,
        height: 50,
    }


})


export default MenuScreen;
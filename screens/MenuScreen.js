import React, { Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, TouchableHighlight, Alert, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ButtonLabel from '../components/ButtonLabel.js';

const MenuScreen = (props) => {
    return (
        <View style = {styles.screen} >

            {/* Setting up Image Header */}
        <View  style = {styles.coverImage} >
            
            <ImageBackground 
                 style = {{width: '100%', height: '100%',}} blurRadius = {3}
                source = {require('../assets/MenuHeader.jpg')} >

             {/* Setting up Text Header */}
             <View style = {styles.textView} >  
                <Text style = {styles.imageText}>{props.title}</Text>
            </View>
            </ImageBackground>
        </View>

        <View style = {styles.row} >

            <View style = {styles.buttonContainer}>


                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name="home" size={40} color="#003082" />
                    <Text style={styles.buttonText}>Canvas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='coffee' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Student Life</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='coffee' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Dining</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='coffee' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Campus Cafe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='coffee' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Calendar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='apple' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Jayshop</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='map' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Maps</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='bell' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Testing')}>
                    <Icon name='bell' size={40} color="#003082" />
                    <Text style={styles.buttonText}>Notifications</Text>
                </TouchableOpacity>


            </View>
            {/*Setting Button and Customize Navigation Bar */}

            <View>
                <ButtonLabel text="Setting"/>
            </View>
        </View>
      
       
        </View>
    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
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
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        height: 50,
       
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexWrap: 'wrap',
    },
    button: {
        display: 'flex',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
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
    }

})


export default MenuScreen;
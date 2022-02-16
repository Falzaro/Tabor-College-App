import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ButtonLabel = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.icons}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
           <View style={styles.itemRight}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        width: '250%', 
        backgroundColor: '#fff',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 200,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',

    },
    icons:{
        width:24,
        height:24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemRight:{
        width:24,
        height:24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 50,
        marginLeft: 210
    },
    itemText:{
        paddingHorizontal: 20,
        fontWeight: 'bold',
        maxWidth:'80%'

    }
});

export default ButtonLabel;
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const ButtonLabel = ({text}) => {

    return (
        <View> 
            <TouchableOpacity style={styles.item}  onPress={() => Alert.alert('Testing')} >
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.icons} >
                    <Icon name="setting" size={25} color="#003082" />
                </TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
           <View style={styles.rightIcons}>
           <TouchableOpacity>
           <Icon  name="arrowright" size={25} color="#003082" />
           </TouchableOpacity>
           </View>
            </TouchableOpacity>
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
        marginBottom: 30,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',

    },
    icons:{
        borderRadius: 5,
        marginRight: 15,

    },
    rightIcons:{
        width:24,
        height:24,
        borderRadius: 20,
        marginLeft: 210
    },
    itemText:{
        fontSize: 15,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        maxWidth:'80%'

    }
});

export default ButtonLabel;
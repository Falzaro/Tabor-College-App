import * as React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const TestScreens =({navigation}) => {
    return (
        <View style={styles.center}>
            <View >
           <Text>Details Screen</Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}

export default TestScreens;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    
});

import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Title, Caption, Headline} from 'react-native-paper';

const About_us = () => {
    return (
        <View style = {styles.container}>
            <Headline>About Us!</Headline>
            <Caption style = {{fontSize: 20, color: 'rgba(255, 205, 0, 1)', marginTop: 10}}>Wichita State University</Caption>
            <Caption style = {{fontSize: 18, color: '#27251F', }}>WuShock Go</Caption>
            <Caption style = {{fontSize: 15, marginTop: 5 }}>Team Members:</Caption>
            <Text style = {{ marginTop: 5 }}>Names</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
export default About_us;
import React from "react";
import { StyleSheet, Linking, View } from "react-native";
import { Button} from 'react-native-paper';

const StudentLifeSocialMedia = () => {
    return (
        <View style ={styles.container}>
            <Button 
                icon ="twitter" 
                color = "#0071ce" 
                uppercase = {false}
                onPress={() => Linking.openURL('https://twitter.com/taborcollege')}>
                Twitter
            </Button>
            <Button 
                icon ="facebook" 
                color = "#0071ce" 
                uppercase = {false}
                onPress={() => Linking.openURL('https://www.facebook.com/TaborCollege')}>
                Facebook
            </Button>
            <Button 
                icon ="instagram" 
                color = "#0071ce" 
                uppercase = {false}
                onPress={() => Linking.openURL('https://www.instagram.com/taborcollege/')}>
                Instagram
            </Button>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    }
})
export default StudentLifeSocialMedia;
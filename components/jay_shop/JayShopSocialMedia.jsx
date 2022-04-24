import React from "react";
import { StyleSheet, Linking, View } from "react-native";
import { Button} from 'react-native-paper';

const JayShopSocialMedia = () => {
    return (
        <View style ={styles.container}>
            <Button 
                icon ="facebook" 
                color = "#4267B2" 
                uppercase = {false}
                onPress={() => Linking.openURL('https://www.facebook.com/TaborCollegeJayShop/')}>
                Facebook
            </Button>
             <Button 
                icon ="instagram" 
                color = "#C13584" 
                uppercase = {false}
                onPress={() => Linking.openURL('https://www.instagram.com/tcjayshop/?hl=en')}>
                Instagram
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
    }
})
export default JayShopSocialMedia; 
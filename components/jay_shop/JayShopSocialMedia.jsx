import React from "react";
import { StyleSheet, Linking, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const JayShopSocialMedia = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
                icon="facebook"
                color="#4267B2"
                uppercase={false}
                onPress={() =>
                    navigation.navigate("Webview", {
                        url: "https://www.facebook.com/TaborCollegeJayShop/",
                        name: "Facebook",
                    })
                }
            >
                Facebook
            </Button>
            <Button
                icon="instagram"
                color="#C13584"
                uppercase={false}
                onPress={() =>
                    navigation.navigate("Webview", {
                        url: "https://www.instagram.com/tcjayshop/?hl=en",
                        name: "Instagram",
                    })
                }
            >
                Instagram
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
export default JayShopSocialMedia;

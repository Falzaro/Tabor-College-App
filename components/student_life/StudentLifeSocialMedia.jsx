import React from "react";
import { StyleSheet, Linking, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const StudentLifeSocialMedia = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
                icon="twitter"
                color="#1DA1F2"
                uppercase={false}
                labelStyle={{ fontSize: 30 }}
                onPress={() =>
                    navigation.navigate("Webview", {
                        url: "https://twitter.com/taborcollege",
                        name: "Twitter",
                    })
                }
            ></Button>
            <Button
                icon="facebook"
                color="#4267B2"
                uppercase={false}
                labelStyle={{ fontSize: 30 }}
                onPress={() =>
                    navigation.navigate("Webview", {
                        url: "https://www.facebook.com/TaborCollege",
                        name: "Facebook",
                    })
                }
            ></Button>
            <Button
                icon="instagram"
                color="#C13584"
                uppercase={false}
                labelStyle={{ fontSize: 30 }}
                onPress={() =>
                    navigation.navigate("Webview", {
                        url: "https://www.instagram.com/taborcollege/",
                        name: "Instagram",
                    })
                }
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
});
export default StudentLifeSocialMedia;

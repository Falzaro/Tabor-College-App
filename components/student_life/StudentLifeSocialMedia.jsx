import React from "react";
import { StyleSheet, Linking, View } from "react-native";
import { Button } from "react-native-paper";

const StudentLifeSocialMedia = () => {
    return (
        <View style={styles.container}>
            <Button
                icon="twitter"
                color="#1DA1F2"
                uppercase={false}
                labelStyle={{ fontSize: 30 }}
                onPress={() =>
                    Linking.openURL("https://twitter.com/taborcollege")
                }
            ></Button>
            <Button
                icon="facebook"
                color="#4267B2"
                uppercase={false}
                labelStyle={{ fontSize: 30 }}
                onPress={() =>
                    Linking.openURL("https://www.facebook.com/TaborCollege")
                }
            ></Button>
            <Button
                icon="instagram"
                color="#C13584"
                uppercase={false}
                labelStyle={{ fontSize: 30 }}
                onPress={() =>
                    Linking.openURL("https://www.instagram.com/taborcollege/")
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

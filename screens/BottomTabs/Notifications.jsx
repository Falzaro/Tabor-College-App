import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Card, Subheading, Title, Headline } from "react-native-paper";

function Notifications() {
    const noNotifications = require("../../assets/notifications_tab/notifications.png");

    return (
        <View style={styles.notifications}>
            <Image
                source={noNotifications}
                style={styles.image}
                resizeMode="contain"
                imageStyle={{
                    borderRadius: 4,
                }}
            />
            <Headline style={styles.headline}>Stay Tuned</Headline>
            <View style={{ width: "80%" }}>
                <Subheading style={styles.subheading}>
                    Notifications will be available in future updates.
                </Subheading>
            </View>
        </View>
    );
}

export default Notifications;

const styles = StyleSheet.create({
    notifications: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 300,
        marginBottom: 35,
    },
    headline: {
        marginBottom: 15,
    },
    subheading: {
        textAlign: "center",
    },
});

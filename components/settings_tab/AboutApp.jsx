// Module Imports
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Linking,
} from "react-native";
import { Title, Divider, Subheading } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";

// Styling Imports
import { styles } from "./styles";

const AboutApp = () => {
    const version = Constants.manifest.version;
    return (
        <View style={styles.card}>
            <View style={styles.titleSection}>
                <Title>About App</Title>
                <Text style={styles.caption}>V {version}</Text>
            </View>
            <Divider style={styles.divider} />
            <TouchableOpacity
                onPress={() =>
                    Linking.openURL(
                        "https://tabor.edu/appsupport/#:~:text=For%20help%20using%20the%20Tabor,at%20connect%40tabor.edu."
                    )
                }
            >
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Subheading
                        style={[styles.subHeading, internalStyles.caption]}
                    >
                        Support
                    </Subheading>
                    <Entypo name="chevron-right" size={24} color="#bababa" />
                </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <TouchableOpacity onPress={() => console.log("Rate us")}>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Subheading
                        style={[styles.subHeading, internalStyles.caption]}
                    >
                        Rate us
                    </Subheading>
                    <Entypo name="chevron-right" size={24} color="#bababa" />
                </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <TouchableOpacity
                onPress={() =>
                    Linking.openURL(
                        "https://app4mobilebiz.wpengine.com/swiftic-mobile-app-end-user-privacy-policy.html"
                    )
                }
            >
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Subheading
                        style={[styles.subHeading, internalStyles.caption]}
                    >
                        Privacy Policy
                    </Subheading>
                    <Entypo name="chevron-right" size={24} color="#bababa" />
                </View>
            </TouchableOpacity>
            <Divider style={{ marginTop: 15 }} />
        </View>
    );
};

export default AboutApp;

const internalStyles = StyleSheet.create({
    caption: {
        color: "#858585",
        fontSize: 14,
    },
});

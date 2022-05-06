// Module Imports
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
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
                <Text style={styles.caption}>{version}</Text>
            </View>
            <Divider style={styles.divider} />
            <TouchableOpacity onPress={() => console.log("Support")}>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Subheading
                        style={[styles.subHeading, internalStyles.caption]}
                    >
                        Support
                    </Subheading>
                    <Entypo name="chevron-right" size={24} color="#9d9d9d" />
                </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <TouchableOpacity onPress={() => console.log("Support")}>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Subheading
                        style={[styles.subHeading, internalStyles.caption]}
                    >
                        Rate us
                    </Subheading>
                    <Entypo name="chevron-right" size={24} color="#9d9d9d" />
                </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <TouchableOpacity onPress={() => console.log("Support")}>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Subheading
                        style={[styles.subHeading, internalStyles.caption]}
                    >
                        Privacy Policy
                    </Subheading>
                    <Entypo name="chevron-right" size={24} color="#9d9d9d" />
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
    },
});

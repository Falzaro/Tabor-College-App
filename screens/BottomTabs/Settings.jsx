// Module Imports
import { Text, View, Switch, ScrollView } from "react-native";
import { Title } from "react-native-paper";

// Relative Imports
import { styles } from "../../components/settings_tab/styles";
import Contribution from "../../components/settings_tab/Contribution";
import AboutApp from "../../components/settings_tab/AboutApp";

function Settings() {
    return (
        <ScrollView style={styles.settings}>
            <View style={[styles.card, { marginTop: 60 }]}>
                <View style={styles.switchSection}>
                    <View style={{ width: "80%" }}>
                        <Title>Notifications</Title>
                        <Text>Get push notifications</Text>
                    </View>
                    <Switch
                        value={false}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={false ? "#f5dd4b" : "#FFFFFF"}
                        ios_backgroundColor="#DFE5EC"
                        disabled={true}
                    />
                </View>
            </View>
            <AboutApp />
            <Contribution />
        </ScrollView>
    );
}

export default Settings;

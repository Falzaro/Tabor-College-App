import { StyleSheet, View, Text } from "react-native";

import About_us from '../../components/about_us/About_us';

function Settings() {
    return (
        <View style={styles.center}>
            <About_us />
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
});

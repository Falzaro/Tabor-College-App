import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewMoreButton = ({ url }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
                <View style={styles.chip}>
                    <MaterialCommunityIcons
                        style={{ marginRight: 10 }}
                        name="web"
                        size={18}
                        color="#808080"
                    />
                    <Text style={styles.chipText}>View more with web</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ViewMoreButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    chip: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 20,
        borderColor: "#cccccc",
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 10,
        width: 200,
        alignItems: "center",
        marginBottom: 20,
        justifyContent: "center",
    },
    chipText: {
        textAlign: "center",
        color: "#333",
    },
});

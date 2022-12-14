import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { WebView } from "react-native-webview";

const Loading = () => (
    <ActivityIndicator
        style={[styles.container, styles.loading]}
        color="#0070CB"
        size={40}
    />
);

function Webview({ route }) {
    const { url } = route.params;
    return (
        <View style={styles.screenContainer}>
            <WebView
                source={{
                    uri: url,
                }}
                startInLoadingState
                renderLoading={Loading}
            />
        </View>
    );
}

export default Webview;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loading: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});

import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import Main from "../components/Main";

function Maps({ route }) {
    const { name } = route;
    const mapsCover = require("../assets/coverImage/maps.jpg");
    const coverImage = {
        source: mapsCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 38.34851,
                        longitude: -97.20017,
                        latitudeDelta: 0.0012,
                        longitudeDelta: 0.0011,
                    }}
                    provider="google"
                />
            </View>
        </Main>
    );
}

export default Maps;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
    },
    map: {
        height: 280,
        width: "100%",
        marginVertical: 10,
    },
});

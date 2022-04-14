import { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Main from "../components/Main";

function Maps({ route }) {
    const markerRef = useRef(null);
    const { name } = route;
    const mapsCover = require("../assets/coverImage/maps.jpg");
    const coverImage = {
        source: mapsCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0,
    };

    sections = {
        data: [
            { days: "Monday", time: "8:00 AM - 5:00 PM" },
            { days: "Tuesday - Thursday", time: "1:30 AM - 3:00 PM" },
        ],
        email: "denise@tabor.edu",
        phone: "316-867-5309",
    };

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <MapView
                    onRegionChangeComplete={() => {
                        if (markerRef.current) {
                            markerRef.current.showCallout();
                        }
                    }}
                    style={styles.map}
                    initialRegion={{
                        latitude: 38.34851,
                        longitude: -97.20017,
                        latitudeDelta: 0.0012,
                        longitudeDelta: 0.0011,
                    }}
                    provider="google"
                    showsCompass
                >
                    <Marker
                        coordinate={{
                            latitude: 38.34851,
                            longitude: -97.20017,
                        }}
                        ref={markerRef}
                    >
                        <Callout>
                            <Text>I'm here</Text>
                        </Callout>
                    </Marker>
                    <Marker
                        coordinate={{
                            latitude: 38.34882,
                            longitude: -97.201,
                        }}
                    >
                        <Callout>
                            <Text>Tabor College Library</Text>
                        </Callout>
                    </Marker>
                </MapView>
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
        marginBottom: 15,
    },
});

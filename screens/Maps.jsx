// Module Imports
import { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Chip, Title } from "react-native-paper";

function Maps({ route }) {
    const [locations, setLocations] = useState([]);
    const markerRef = useRef(null);
    const { name } = route;
    const mapsCover = require("../assets/coverImage/maps.jpg");
    const coverImage = {
        source: mapsCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0,
    };

    useEffect(() => {
        // Get maps Locations from Firestore
        const docRef = doc(db, "maps", "Buildings on Campus");
        getDoc(docRef).then((doc) => {
            setLocations(doc.data().locations);
        });
    }, []);

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
                <View style={styles.buildingsOnCampus}>
                    <Title>Buildings on Campus</Title>
                    {locations.map((location) => (
                        <View key={location}>
                            <Chip mode="outlined">{location}</Chip>
                        </View>
                    ))}
                </View>
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
        // marginBottom: 15,
    },
    buildingsOnCampus: {
        padding: 15,
        width: "100%",
    },
});

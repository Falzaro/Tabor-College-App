// Module Imports
import { useRef, useEffect, useState, createRef } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Chip, Title } from "react-native-paper";

function Maps({ route }) {
    const [locations, setLocations] = useState([]);
    const [activeLocation, setActiveLocation] = useState({
        latitude: 38.34851,
        longitude: -97.20017,
    });
    let regionRef = useRef();
    let markerRef = useRef();
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
            const data = doc.data();
            setLocations(data.locations);
            setActiveLocation(data.locations[0]);
        });
    }, []);
    const handleMarkerPress = (location, i) => {
        setActiveLocation(location);
        regionRef.current.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0012,
            longitudeDelta: 0.0011,
        });
    };

    return (
        <Main name={name} coverImage={coverImage} imageSize="small">
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: activeLocation.latitude,
                    longitude: activeLocation.longitude,
                    latitudeDelta: 0.0012,
                    longitudeDelta: 0.0011,
                }}
                onRegionChangeComplete={() => {
                    console.log(markerRef);
                    markerRef?.current?.showCallout();
                }}
                provider="google"
                showsCompass
                ref={(ref) => {
                    regionRef.current = ref;
                }}
            >
                {locations.map((location, i) => (
                    <Marker
                        key={location.name}
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        ref={(ref) => (markerRef.current = ref)}
                    >
                        <Callout tooltip>
                            <Text>{location.name}</Text>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <ScrollView style={styles.center}>
                <View style={styles.buildingsOnCampus}>
                    <Title style={styles.locationsTitle}>
                        Buildings on Campus
                    </Title>
                    <View style={styles.locationsContainer}>
                        {locations.map((location, i) => (
                            <View key={location.name} style={styles.location}>
                                <Chip
                                    onPress={() =>
                                        handleMarkerPress(location, i)
                                    }
                                    style={styles.chip}
                                    mode="outlined"
                                    textStyle={styles.chipText}
                                >
                                    {location.name}
                                </Chip>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </Main>
    );
}

export default Maps;

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
    map: {
        height: 280,
        width: "100%",
    },
    buildingsOnCampus: {
        padding: 15,
    },
    locationsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    locationsTitle: {
        marginBottom: 12,
    },
    location: {
        marginBottom: 9,
        marginRight: 10,
    },
    chip: {
        backgroundColor: "rgb(226, 237, 248)",
        borderColor: "rgb(0, 127, 255)",
        // color: "rgb(0, 106, 213)",
    },
    // chip: {
    //     backgroundColor: "rgba(0, 0, 0, 0.05)",
    //     borderColor: "black",
    // },
    chipText: {
        // color: "#0057B2",
        // color: "rgb(0, 127, 255)",
        color: "rgb(0, 106, 213)",
    },
    // chipText: {
    //     color: "black",
    // },
});

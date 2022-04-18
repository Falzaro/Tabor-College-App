// Module Imports
import { useRef, useEffect, useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import LocationMarkers from "../components/maps/LocationMarkers";
import BuildingsOnCampus from "../components/maps/BuildingsOnCampus";
import Classrooms from "../components/maps/Classrooms";

function Maps({ route }) {
    const [locations, setLocations] = useState([]);
    const [textFocusMode, setTextFocusMode] = useState(false);
    const [fullscreenMode, setFullscreenMode] = useState(false);
    const [activeLocation, setActiveLocation] = useState({
        latitude: 38.34851,
        longitude: -97.20017,
    });
    let regionRef = useRef();
    let scrollRef = useRef();
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
            // Sort the locations by name
            const sortedLocations = doc
                .data()
                .locations.sort((a, b) => a.name.length > b.name.length);
            setLocations(sortedLocations);
            // Set the first location as the active location
            setActiveLocation(sortedLocations[0]);
        });
    }, []);

    const handleFullscreenPress = () => {
        setFullscreenMode(!fullscreenMode);
    };

    // Set the height of the map depending on what mode the user is in
    let mapHeight;
    if (fullscreenMode) mapHeight = "100%";
    else if (textFocusMode) mapHeight = 0;
    else mapHeight = 280;

    return (
        <Main name={name} coverImage={coverImage} imageSize="small">
            <MapView
                style={{
                    ...styles.map,
                    height: mapHeight,
                }}
                initialRegion={{
                    latitude: activeLocation.latitude,
                    longitude: activeLocation.longitude,
                    latitudeDelta: 0.0012,
                    longitudeDelta: 0.0011,
                }}
                provider="google"
                showsCompass={false}
                ref={(ref) => {
                    regionRef.current = ref;
                }}
            >
                {/* Add vector icon to top right of the map */}
                <LocationMarkers locations={locations} />
            </MapView>
            <TouchableOpacity
                onPress={handleFullscreenPress}
                style={styles.fullscreenButton}
            >
                <MaterialIcons name="fullscreen" size={30} color="#373737" />
            </TouchableOpacity>
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.12)",
                }}
            />
            {/* Content below the map */}
            <ScrollView ref={scrollRef} style={styles.center}>
                <BuildingsOnCampus
                    locations={locations}
                    setActiveLocation={setActiveLocation}
                    regionRef={regionRef}
                />
                <Classrooms
                    locations={locations}
                    setTextFocusMode={setTextFocusMode}
                    textFocusMode={textFocusMode}
                    regionRef={regionRef}
                    scrollRef={scrollRef}
                />
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
        borderBottomWidth: 3,
        borderBottomColor: "red",
    },
    fullscreenButton: {
        backgroundColor: "#fff",
        flex: 0,
        position: "absolute",
        padding: 8,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        right: 20,
        top: 20,
        elevation: 5,
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

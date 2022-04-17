// Module Imports
import { useRef, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import MapView from "react-native-maps";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import LocationMarkers from "../components/maps/LocationMarkers";
import BuildingsOnCampus from "../components/maps/BuildingsOnCampus";
import Classrooms from "../components/maps/Classrooms";

function Maps({ route }) {
    const [locations, setLocations] = useState([]);
    const [activeLocation, setActiveLocation] = useState({
        latitude: 38.34851,
        longitude: -97.20017,
    });
    let regionRef = useRef();
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
            // Set the first location as the active location
            setActiveLocation(data.locations[0]);
        });
    }, []);

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
                onRegionChangeComplete={() => {}}
                provider="google"
                showsCompass
                ref={(ref) => {
                    regionRef.current = ref;
                }}
            >
                <LocationMarkers locations={locations} />
            </MapView>
            {/* Content below the map */}
            <ScrollView style={styles.center}>
                <BuildingsOnCampus
                    locations={locations}
                    setActiveLocation={setActiveLocation}
                    regionRef={regionRef}
                />
                {/* <Classrooms /> */}
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
});

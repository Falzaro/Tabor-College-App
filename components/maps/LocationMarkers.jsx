import { StyleSheet, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";

function LocationMarkers({ locations }) {
    return locations.map((location) => (
        <Marker
            key={location.name}
            coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
            }}
        >
            <Callout tooltip>
                <Text>{location.name}</Text>
            </Callout>
        </Marker>
    ));
}

export default LocationMarkers;

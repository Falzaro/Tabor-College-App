// Module Imports
import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Card, Divider, Subheading, Title, Chip } from "react-native-paper";
import { doc, getDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Relative Imports
import { db } from "../../firebase/config";

function Classrooms({
    locations,
    setTextFocusMode,
    textFocusMode,
    scrollRef,
    regionRef,
}) {
    const [classrooms, setClassrooms] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    // Filter classrooms by building name
    const filteredClassrooms = classrooms.filter((classroom) => {
        if (searchValue === "") return true;
        return (
            classroom?.building?.slice(0, searchValue.length) === searchValue
        );
    });

    useEffect(() => {
        // Fetch and store the locations in the state
        const docRef = doc(
            db,
            "maps",
            "List of Classrooms and Capacity Numbers"
        );
        getDoc(docRef).then((doc) => {
            setClassrooms(doc.data().classrooms);
        });
    }, []);

    useEffect(() => {
        // If there are 3 or fewer classroom results, then scroll down to the bottom
        if (filteredClassrooms.length <= 3) {
            scrollRef.current.scrollToEnd();
        }
    }, [textFocusMode]);

    const handleSearch = (text) => {
        setSearchValue(text);
    };

    // What happens when the user is searching by building name
    const handleFocus = () => {
        setTextFocusMode(true);
    };

    // What happens when the user is done searching
    const handleBlur = () => {
        setTextFocusMode(false);
    };

    const handleClassroomPress = (classroom) => {
        // Find the location that matches with the classroom building
        const foundLocation = locations.find(
            (location) => location.building === classroom.building
        );
        if (foundLocation)
            // Navigate to the location building
            regionRef.current.animateToRegion({
                latitude: foundLocation.latitude,
                longitude: foundLocation.longitude,
                latitudeDelta: 0.0012,
                longitudeDelta: 0.0011,
            });
    };

    return (
        <Card
            style={{
                ...styles.classrooms,
                // Push the card up if the user is searching
                ...{ marginBottom: textFocusMode ? 250 : 30 },
            }}
        >
            <View style={{ ...styles.row, justifyContent: "space-between" }}>
                <Title style={styles.classroomsTitle}>
                    Classrooms ({filteredClassrooms.length})
                </Title>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search building"
                    placeholderTextColor="gray"
                    value={searchValue}
                    onChangeText={handleSearch}
                    autoCapitalize="characters"
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </View>
            {filteredClassrooms.map((classroom, i) => (
                <View style={styles.classroom} key={`_key${i}`}>
                    <View style={{ width: "87%" }}>
                        {/* Building */}
                        <View style={styles.row}>
                            <Subheading>Building:</Subheading>
                            <Chip
                                onPress={() => handleClassroomPress(classroom)}
                                style={styles.chip}
                            >
                                {classroom.building}
                            </Chip>
                        </View>
                        {/* Room */}
                        <View style={styles.row}>
                            <Subheading style={styles.subheading}>
                                Room: {classroom.room}
                            </Subheading>
                            {/* Capacity */}
                            <Subheading>
                                Capacity: {classroom.capacity}
                            </Subheading>
                        </View>
                        {/* Note */}
                        {Boolean(classroom.note) && (
                            <Subheading>Note: {classroom.note}</Subheading>
                        )}
                        <Divider style={styles.divider} />
                    </View>
                    {/* Button that navigates to a new region */}
                    <TouchableOpacity
                        onPress={() => handleClassroomPress(classroom)}
                    >
                        <MaterialCommunityIcons
                            name="map-marker-right-outline"
                            size={23}
                            color="#747474"
                        />
                    </TouchableOpacity>
                </View>
            ))}
        </Card>
    );
}

export default Classrooms;

const styles = StyleSheet.create({
    classrooms: {
        flex: 1,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 30,
    },
    classroomsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    searchInput: {
        width: 120,
        height: 30,
        borderBottomWidth: 1,
        borderColor: "gray",
        marginRight: 15,
    },
    classroom: {
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 15,
    },
    row: {
        width: "100%",
        flexDirection: "row",
    },
    subheading: {
        marginRight: 25,
    },
    chip: {
        marginLeft: 7,
    },
    divider: {
        backgroundColor: "#8f8f8f",
        marginTop: 10,
    },
});

// Module Imports
import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Card, Divider, Subheading, Title, Chip } from "react-native-paper";
import { doc, getDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Relative Imports
import { db } from "../../firebase/config";

function Classrooms({ setTextFocusMode, textFocusMode, scrollRef }) {
    const [classrooms, setClassrooms] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const filteredClassrooms = classrooms.filter((classroom) => {
        if (searchValue === "") return true;
        return (
            classroom?.building?.slice(0, searchValue.length) === searchValue
        );
    });

    useEffect(() => {
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
        if (filteredClassrooms.length <= 3) {
            scrollRef.current.scrollToEnd();
        }
    }, [textFocusMode]);

    const handleSearch = (text) => {
        setSearchValue(text);
    };

    const handleFocus = () => {
        setTextFocusMode(true);
    };

    const handleBlur = () => {
        setTextFocusMode(false);
    };

    return (
        <Card
            style={{
                ...styles.classrooms,
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
                        <View style={styles.row}>
                            <Subheading>Building:</Subheading>
                            <Chip style={styles.chip}>
                                {classroom.building}
                            </Chip>
                        </View>
                        <View style={styles.row}>
                            <Subheading style={styles.subheading}>
                                Room: {classroom.room}
                            </Subheading>
                            <Subheading>
                                Capacity: {classroom.capacity}
                            </Subheading>
                        </View>
                        {Boolean(classroom.note) && (
                            <Subheading>Note: {classroom.note}</Subheading>
                        )}
                        <Divider style={styles.divider} />
                    </View>
                    <MaterialCommunityIcons
                        name="map-marker-right-outline"
                        size={23}
                        color="#747474"
                    />
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

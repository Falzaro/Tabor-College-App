// Module Imports
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { DataTable, Title } from "react-native-paper";
import { doc, getDoc } from "firebase/firestore";

// Relative Imports
import { db } from "../../firebase/config";

function Classrooms() {
    const [classrooms, setClassrooms] = useState([]);

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
    console.log(classrooms);
    return (
        <View style={styles.classrooms}>
            <Title style={styles.classroomsTitle}>Classrooms</Title>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Building</DataTable.Title>
                    <DataTable.Title numeric>Room</DataTable.Title>
                    <DataTable.Title numeric>Capacity</DataTable.Title>
                    <DataTable.Title>Notes</DataTable.Title>
                </DataTable.Header>
                {classrooms.map((classroom) => (
                    <DataTable.Row>
                        <DataTable.Cell>{classroom.building}</DataTable.Cell>
                        <DataTable.Cell numeric>
                            {classroom.room}
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            {classroom.capacity}
                        </DataTable.Cell>
                        <DataTable.Cell>{classroom.note}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </View>
    );
}

export default Classrooms;

const styles = StyleSheet.create({
    classrooms: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    classroomsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginTop: 10,
    },
});

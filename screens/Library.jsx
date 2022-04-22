import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Main from "../components/Main";

import { db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

import DrawerTab from '../components/student_life/Student_life_drawer';

function Library({ route }) {
    const [libraryData, setLibraryData] = useState([]);
        useEffect(() => {
            const docRef = doc(db, "student life links", "student life links");
            getDoc(docRef)
                .then((doc) => {
                    setLibraryData(doc.data().sections)
                })
                .catch((err) => {
                    console.log(err);
                })
        }, []);

    const { name } = route;
    const libraryCover = require("../assets/coverImage/library.jpg");
    const coverImage = {
        source: libraryCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 1,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <Text>{libraryData.title}</Text>
                <FlatList 
                data = {libraryData}
                keyExtractor = {(item) => item.title}
                renderItem= {({item: section}) => (
                    <DrawerTab section={section} />
                )}
                />
            </View>
        </Main>
    );
}

export default Library;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

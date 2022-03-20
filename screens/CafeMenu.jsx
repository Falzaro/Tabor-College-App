// Module Imports
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function CafeMenu({ route }) {
    const [cafeMenu, setCafeMenu] = useState([]);
    const { name } = route;
    const cafeMenuCover = require("../assets/coverImage/cafeMenu.jpg");
    const coverImage = {
        source: cafeMenuCover,
        darkness: "rgba(0, 0, 0, 0.17)",
        blurRadius: 1,
    };

    useEffect(() => {
        // Get the cafe menu from firebase version 9
        const docRef = doc(db, "cafe menu", "tuesday");
        getDoc(docRef)
            .then((doc) => {
                setCafeMenu(doc.data().sections);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        console.log(cafeMenu);
    }, [cafeMenu]);

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <SectionList
                    style={styles.sectionList}
                    contentContainerStyle={styles.contentContainer}
                    stickySectionHeadersEnabled={false}
                    sections={cafeMenu}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>{item}</Text>
                    )}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>
                            {section.title}
                        </Text>
                    )}
                />
            </View>
        </Main>
    );
}

export default CafeMenu;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sectionList: {
        flex: 1,
        width: "100%",
    },
    contentContainer: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    item: {
        fontSize: 18,
        marginBottom: 5,
    },
});

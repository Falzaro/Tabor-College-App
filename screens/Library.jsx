import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Main from "../components/Main";
import LibraryHours from "../components/library_screen/Library_Hours";

function Library({ route }) {
    const { name } = route;
    const libraryCover = require("../assets/coverImage/library.jpg");
    const coverImage = {
        source: libraryCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 1,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <LibraryHours />
            </ScrollView>
        </Main>
    );
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
    },
});

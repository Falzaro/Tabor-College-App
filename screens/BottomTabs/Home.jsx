// Module Imports
import React from "react";
import { View, StyleSheet } from "react-native";

// Relative Imports
import { buttonsData } from "../../data/buttonsData";
import MainButton from "../../components/MainButton";
import Main from "../../components/Main";

const Home = () => {
    return (
        <Main title="Tabor College">
            <View style={styles.buttonsBackCover}>
                {/* Map out the buttons */}
                <View style={styles.buttonContainer}>
                    {buttonsData.map(({ label, link, Image }) => (
                        <MainButton
                            key={label}
                            label={label}
                            link={link}
                            Image={Image}
                        />
                    ))}
                </View>
            </View>
        </Main>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#EEEEEE",
    },
    coverImage: {
        width: "100%",
        height: 180,
    },
    imgBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    imageText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 24,
    },
    screenBody: {
        flex: 1,
        padding: 15,
    },
    buttonsBackCover: {
        height: "100%",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#f8f8f8",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 30,
    },
});

export default Home;

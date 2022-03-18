// Module Imports
import React from "react";
import { View, StyleSheet } from "react-native";

// Relative Imports
import { buttonsData } from "../data/buttonsData";
import MainButton from "../components/MainButton";
import Main from "../components/Main";

const TaborCollege = ({ route }) => {
    const { name } = route;
    return (
        <Main name={name}>
            <View style={styles.buttonsBackCover}>
                {/* Map out the buttons */}
                <View style={styles.buttonContainer}>
                    {buttonsData.map(({ label, link, Image }) => (
                        <MainButton
                            key={label}
                            label={label}
                            link={link}
                            Image={Image}
                            name={name}
                        />
                    ))}
                </View>
            </View>
        </Main>
    );
};

const styles = StyleSheet.create({
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

export default TaborCollege;

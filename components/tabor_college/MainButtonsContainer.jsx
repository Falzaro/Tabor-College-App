import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainButtonsContainer = ({ buttonsData }) => {
    return (
        <View style={styles.buttonsContainer}>
            {item.map(({ label, link, Image }) => (
                <MainButton
                    key={label}
                    label={label}
                    link={link}
                    Image={Image}
                    name={name}
                />
            ))}
        </View>
    );
};

export default MainButtonsContainer;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 30,
        backgroundColor: "red",
    },
});

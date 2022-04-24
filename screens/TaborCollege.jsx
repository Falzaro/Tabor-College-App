// Module Imports
import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    FlatList,
} from "react-native";

// Relative Imports
import { buttonsData } from "../data/buttonsData";
import MainButton from "../components/MainButton";
import Main from "../components/Main";

const TaborCollege = ({ route }) => {
    const { name } = route;
    const taborCollegeCover = require("../assets/coverImage/taborCollege.jpg");
    const coverImage = {
        source: taborCollegeCover,
        darkness: "rgba(0, 0, 0, 0.0)",
        blurRadius: 1,
    };
    const WIDTH = Dimensions.get("window").width;

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.screenContainer}>
                <View style={styles.buttonsBackCover}>
                    <FlatList
                        // Width minus all horizontal spacings.
                        snapToInterval={WIDTH - 50}
                        decelerationRate="fast"
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={[buttonsData, buttonsData, buttonsData]}
                        renderItem={({ item }) => (
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
                        )}
                    />
                </View>
            </View>
        </Main>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 15,
    },
    buttonsBackCover: {
        height: "100%",
        borderRadius: 20,
        backgroundColor: "#f8f8f8",
        padding: 10,
    },
    buttonsContainer: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 25,
        // backgroundColor: "red",
    },
});

export default TaborCollege;

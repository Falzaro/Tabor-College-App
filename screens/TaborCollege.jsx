// Module Imports
import { useState } from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";

// Relative Imports
import { buttonsData } from "../data/buttonsData";
import MainButton from "../components/MainButton";
import Main from "../components/Main";
import MainCircles from "../components/tabor_college/MainCircles";

const WIDTH = Dimensions.get("window").width;

const TaborCollege = ({ route }) => {
    const [mainButtonsIndex, setMainButtonsIndex] = useState(0);
    const { name } = route;
    const taborCollegeCover = require("../assets/coverImage/taborCollege.jpg");
    const coverImage = {
        source: taborCollegeCover,
        darkness: "rgba(0, 0, 0, 0.0)",
        blurRadius: 1,
    };

    const buttonsContainers = [
        buttonsData,
        buttonsData,
        buttonsData.slice(0, 5),
    ];

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.screenContainer}>
                <View style={styles.buttonsBackCover}>
                    <FlatList
                        // Width minus all horizontal paddings and margins.
                        snapToInterval={WIDTH - 50}
                        decelerationRate="fast"
                        disableIntervalMomentum
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={buttonsContainers}
                        keyExtractor={(_, index) => `_key_mainButton${index}`}
                        onScroll={(event) => {
                            // Get index for each swipe
                            const x = event.nativeEvent.contentOffset.x;
                            const index = Math.round(x / (WIDTH - 50));
                            setMainButtonsIndex(index);
                        }}
                        renderItem={({ item }) => {
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
                        }}
                    />
                    <MainCircles
                        mainButtonsIndex={mainButtonsIndex}
                        buttonsContainers={buttonsContainers}
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
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 20,
        width: WIDTH - 50,
    },
});

export default TaborCollege;

// Module Imports
import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";

// Relative Imports
import { buttonsData, getButtonsData } from "../data/buttonsData";
import MainButton from "../components/MainButton";
import Main from "../components/Main";
import MainCircles from "../components/tabor_college/MainCircles";

const WIDTH = Dimensions.get("window").width;

const TaborCollege = ({ route }) => {
    const [buttonsContainersIndex, setButtonsContainersIndex] = useState(0);
    const [buttonsContainers, setButtonsContainers] = useState([]);
    const { name } = route;
    const taborCollegeCover = require("../assets/coverImage/taborCollege.jpg");
    const coverImage = {
        source: taborCollegeCover,
        darkness: "rgba(0, 0, 0, 0.0)",
        blurRadius: 1,
    };

    useEffect(() => {
        getButtonsData().then((buttonsData) =>
            setButtonsContainers([...buttonsData, ...buttonsData])
        );
    }, [buttonsContainers]);

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
                            setButtonsContainersIndex(index);
                        }}
                        renderItem={({ item: buttonsContainer }) => {
                            return (
                                <View style={styles.buttonsContainer}>
                                    {buttonsContainer.map(
                                        ({ name, url, image }) => (
                                            <MainButton
                                                key={`_key${name}`}
                                                label={name}
                                                link={url}
                                                image={image}
                                                name={name}
                                            />
                                        )
                                    )}
                                </View>
                            );
                        }}
                    />
                    <MainCircles
                        buttonsContainersIndex={buttonsContainersIndex}
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

// Module Imports
import { useState, useEffect, useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Relative Imports
import { getButtonsData, getScreenButtons } from "../data/buttonsData";
import MainButton from "../components/MainButton";
import Main from "../components/Main";
import MainCircles from "../components/tabor_college/MainCircles";

const TaborCollege = ({ route }) => {
    const [buttonsContainersIndex, setButtonsContainersIndex] = useState(0);
    const [buttonsContainers, setButtonsContainers] = useState([]);
    const [screenButtonNames, setScreenButtonNames] = useState([]);
    let backCoverRef = useRef();
    const { name } = route;
    const taborCollegeCover = require("../assets/coverImage/taborCollege.jpg");
    const coverImage = {
        source: taborCollegeCover,
        darkness: "rgba(0, 0, 0, 0.0)",
        blurRadius: 1,
    };

    useEffect(() => {
        getButtonsData().then((buttonsData) =>
            setButtonsContainers([
                ...buttonsData,
                // ...buttonsData,
                // buttonsData[0].slice(0, 2),
            ])
        );
    }, []);

    useEffect(() => {
        getScreenButtons().then((screenButtons) =>
            setScreenButtonNames(screenButtons.map((button) => button.name))
        );
    }, []);

    const handleLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        backCoverRef.width = width;
    };

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.screenContainer}>
                <View onLayout={handleLayout} style={styles.buttonsBackCover}>
                    <FlatList
                        // Width minus all horizontal paddings and margins.
                        snapToInterval={backCoverRef?.width}
                        decelerationRate="fast"
                        disableIntervalMomentum
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={buttonsContainers}
                        keyExtractor={(_, index) => `_key_mainButton${index}`}
                        onScroll={(event) => {
                            // Get index for each swipe
                            const x = event.nativeEvent.contentOffset.x;
                            const index = Math.round(x / backCoverRef?.width);
                            setButtonsContainersIndex(index);
                        }}
                        renderItem={({ item: buttonsContainer }) => {
                            return (
                                <View
                                    style={{
                                        marginTop: 20,
                                        flex: 1,
                                        alignItems: "center",
                                        width: backCoverRef.width,
                                    }}
                                >
                                    {buttonsContainer.map((buttonsRow, i) => (
                                        <View
                                            key={`__key${buttonsRow}${i}`}
                                            style={styles.buttonsRow}
                                        >
                                            {buttonsRow.map(
                                                ({ name, url, image }) => (
                                                    <MainButton
                                                        key={`_key${name}`}
                                                        name={name}
                                                        url={url}
                                                        image={image}
                                                        screenButtonNames={
                                                            screenButtonNames
                                                        }
                                                    />
                                                )
                                            )}
                                        </View>
                                    ))}
                                </View>
                            );
                        }}
                    />
                    {buttonsContainers.length > 1 && (
                        <MainCircles
                            buttonsContainersIndex={buttonsContainersIndex}
                            buttonsContainers={buttonsContainers}
                        />
                    )}
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
        backgroundColor: "#fafafa",
        alignItems: "center",
        flex: 1,
        width: "auto",
    },
    buttonsRow: {
        flexDirection: "row",
        marginBottom: 5,
        // alignSelf: "stretch",
    },
});

export default TaborCollege;

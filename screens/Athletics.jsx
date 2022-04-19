import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GenderButton from "../components/athletics/GenderButton";
import Main from "../components/Main";

function Athletics({ route }) {
    const [genderType, setGenderType] = useState("Men");
    const { name } = route;
    const sportsCover = require("../assets/coverImage/sports.jpeg");
    const coverImage = {
        source: sportsCover,
        darkness: "rgba(0, 0, 0, 0.07)",
        blurRadius: 1,
    };

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <GenderButton
                        title="Men"
                        onPress={() => setGenderType("Men")}
                        value={genderType}
                    />
                    <GenderButton
                        title="Women"
                        onPress={() => setGenderType("Women")}
                        value={genderType}
                    />
                </View>
            </View>
        </Main>
    );
}

export default Athletics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
    },
});

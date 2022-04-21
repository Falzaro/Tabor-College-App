// Module Imports
import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { doc, getDoc } from "firebase/firestore";

// Relative Imports
import GenderButton from "../components/athletics/GenderButton";
import SeasonCard from "../components/athletics/SeasonCard";
import Main from "../components/Main";
import { db } from "../firebase/config";

function Athletics({ route }) {
    const [genderType, setGenderType] = useState("Men's");
    const [mens, setMens] = useState({});
    const [womens, setWomens] = useState({});
    const { name } = route;
    const sportsCover = require("../assets/coverImage/sports.jpeg");
    const coverImage = {
        source: sportsCover,
        darkness: "rgba(0, 0, 0, 0.07)",
        blurRadius: 1,
    };

    useEffect(() => {
        const sportsRef = doc(db, "athletics", "sports");
        getDoc(sportsRef).then((doc) => {
            setMens(doc.data()["men's"]);
            setWomens(doc.data()["women's"]);
        });
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <ScrollView style={styles.container}>
                <View style={styles.buttonsRow}>
                    <GenderButton
                        title="Men's"
                        onPress={() => setGenderType("Men's")}
                        value={genderType}
                    />
                    <GenderButton
                        title="Women's"
                        onPress={() => setGenderType("Women's")}
                        value={genderType}
                    />
                </View>
                {genderType === "Men's" && (
                    <View style={styles.cards}>
                        <SeasonCard sportsData={mens.fall} title="Fall" />
                        <SeasonCard sportsData={mens.winter} title="Winter" />
                        <SeasonCard sportsData={mens.spring} title="Spring" />
                    </View>
                )}
                {genderType === "Women's" && (
                    <View style={styles.cards}>
                        <SeasonCard sportsData={womens.fall} title="Fall" />
                        <SeasonCard sportsData={womens.winter} title="Winter" />
                        <SeasonCard sportsData={womens.spring} title="Spring" />
                    </View>
                )}
            </ScrollView>
        </Main>
    );
}

export default Athletics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonsRow: {
        flexDirection: "row",
        marginBottom: 20,
    },
    cards: {
        marginBottom: 20,
    },
});

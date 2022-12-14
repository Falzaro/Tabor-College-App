// Module Imports
import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { doc, onSnapshot } from "firebase/firestore";

// Relative Imports
import GenderButton from "../components/athletics/GenderButton";
import SeasonCard from "../components/athletics/SeasonCard";
import Main from "../components/Main";
import { db } from "../firebase/config";
import CampusRecreationCenter from "../components/athletics/CampusRecreationCenter";
import SportsBanner from "../components/athletics/SportsBanner";
import SocialMedias from "../components/athletics/SocialMedias";
import ViewMoreButton from "../components/ViewMoreButton";

function Athletics({ route }) {
    const [genderType, setGenderType] = useState("men's");
    const [sports, setSports] = useState([]);
    const { name } = route;
    const sportsCover = require("../assets/coverImage/sports.jpeg");
    const coverImage = {
        source: sportsCover,
        darkness: "rgba(0, 0, 0, 0.07)",
        blurRadius: 1,
    };

    useEffect(() => {
        const sportsRef = doc(db, "athletics", "sports");
        const unsub = onSnapshot(sportsRef, (doc) => {
            setSports(doc.data());
        });
        return unsub;
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <ScrollView style={styles.container}>
                <CampusRecreationCenter />
                <SportsBanner headline="Sports" />
                <View style={styles.buttonsRow}>
                    <GenderButton
                        name="men's"
                        onPress={() => setGenderType("men's")}
                        value={genderType}
                    />
                    <View style={{ width: 20 }} />
                    <GenderButton
                        name="women's"
                        onPress={() => setGenderType("women's")}
                        value={genderType}
                    />
                </View>
                <SeasonCard
                    sportsData={sports[genderType]?.fall}
                    season="Fall"
                    genderType={genderType}
                />
                <SeasonCard
                    sportsData={sports[genderType]?.winter}
                    season="Winter"
                    genderType={genderType}
                />
                <SeasonCard
                    sportsData={sports[genderType]?.spring}
                    season="Spring"
                    genderType={genderType}
                />
                <SocialMedias />
                <ViewMoreButton
                    url="https://www.taborbluejays.com/"
                    name="Athletics"
                />
            </ScrollView>
        </Main>
    );
}

export default Athletics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    buttonsRow: {
        flexDirection: "row",
        marginBottom: 25,
        justifyContent: "center",
    },
});

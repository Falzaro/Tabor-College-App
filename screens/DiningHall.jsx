// Module Imports
import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { doc, onSnapshot } from "firebase/firestore";
import { Card, Subheading } from "react-native-paper";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import FoodCard from "../components/dining_hall/FoodCard";
import DaysButtonGroup from "../components/dining_hall/DaysButtonGroup";
import AvailableHours from "../components/helpful_hours/AvailableHours";
import ViewMoreButton from "../components/ViewMoreButton";
import CustomChip from "../components/CustomChip";

function DiningHall({ route }) {
    const [cafeMenu, setCafeMenu] = useState([]);
    const [activeDay, setActiveDay] = useState();
    const [loadingData, setLoadingData] = useState(true);
    const [diningHallHours, setDiningHallHours] = useState({});
    const { name } = route;
    const diningHallCover = require("../assets/coverImage/diningHall.jpg");
    const noMenuAvailableImg = require("../assets/cafe_menu/noMenuAvailable.png");
    const coverImage = {
        source: diningHallCover,
        darkness: "rgba(0, 0, 0, 0.17)",
        blurRadius: 1,
    };

    useEffect(() => {
        // Get the cafe menu from Firestore
        if (activeDay) {
            const docRef = doc(db, "cafe menu", activeDay);
            const unsub = onSnapshot(docRef, (doc) => {
                setCafeMenu(doc.data().sections);
                setLoadingData(false);
            });
            return unsub;
        }
    }, [activeDay]);

    useEffect(() => {
        // Get the dining hall hours from Firestore
        const diningHallDocRef = doc(db, "helpful hours", "dining hall hours");
        const unsub = onSnapshot(diningHallDocRef, (doc) => {
            setDiningHallHours(doc.data());
        });
        return unsub;
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <ScrollView>
                <View style={styles.diningHallHours}>
                    <AvailableHours
                        openHours={diningHallHours["open hours"]}
                        section={diningHallHours}
                    />
                </View>
                <DaysButtonGroup
                    activeDay={activeDay}
                    setActiveDay={setActiveDay}
                />
                {/* Only render if cafe menu is empty even after the data is done Loading */}
                {cafeMenu.length === 0 && !loadingData && (
                    <View style={{ paddingHorizontal: 18 }}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Subheading>
                                    No menu available on {activeDay}.
                                </Subheading>
                                <Card.Cover source={noMenuAvailableImg} />
                            </Card.Content>
                        </Card>
                    </View>
                )}
                {/* Map out menus */}
                <View style={styles.contentContainer}>
                    {cafeMenu.map((section, index) => (
                        <FoodCard
                            key={`foodCard_key${index}`}
                            section={section}
                        />
                    ))}
                </View>
                <ViewMoreButton
                    url="https://oncampusdining.com/tabor/menu/"
                    name="Dinning Hall"
                />
            </ScrollView>
        </Main>
    );
}

export default DiningHall;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 18,
        paddingBottom: 5,
    },
    card: {
        marginBottom: 15,
        padding: 10,
        paddingHorizontal: 18,
        alignItems: "center",
    },
    diningHallHours: {
        paddingHorizontal: 18,
        marginTop: 15,
    },
});

// Module Imports
import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import FoodCard from "../components/FoodCard";
import ButtonDaysGroup from "../components/cafe_menu/ButtonDaysGroup";

function CafeMenu({ route }) {
    const [cafeMenu, setCafeMenu] = useState([]);
    const { name } = route;
    const cafeMenuCover = require("../assets/coverImage/cafeMenu.jpg");
    const coverImage = {
        source: cafeMenuCover,
        darkness: "rgba(0, 0, 0, 0.17)",
        blurRadius: 1,
    };

    useEffect(() => {
        // Get the cafe menu from firebase version 9
        const docRef = doc(db, "cafe menu", "tuesday");
        getDoc(docRef)
            .then((doc) => {
                setCafeMenu(doc.data().sections);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <ButtonDaysGroup />
            <FlatList
                data={cafeMenu}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={(item) => item.title}
                renderItem={({ item: section }) => (
                    <FoodCard section={section} />
                )}
            />
        </Main>
    );
}

export default CafeMenu;

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 18,
        // paddingVertical: -10,
        // paddingVertical: 10,
        paddingBottom: 5,
        width: "100%",
    },
});

// Module Imports
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";



// Relative Imports
import Main from "../components/Main";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Card, Title, Caption } from "react-native-paper";

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
            {
                <FlatList
                    data={cafeMenu}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item: section }) => (
                        <Card style={styles.card}>
                            <Title>{section.title}</Title>
                            <FlatList
                                keyExtractor={(item) => item}
                                data={section.data}
                                renderItem={({ item }) => (
                                    <View style={styles.foodItem}>
                                        <Text style={styles.bulletedPoint}>
                                            {`\u2B24` + " "}
                                        </Text>
                                        <Caption key={item}>{item}</Caption>
                                    </View>
                                )}
                            />
                        </Card>
                    )}
                />
            }
        </Main>
    );
}

export default CafeMenu;

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 18,
        paddingTop: 18,
        width: "100%",
    },
    cardsContainer: {
        flex: 1,
        width: "98%",
    },
    card: {
        marginBottom: 15,
        padding: 10,
    },
    sectionList: {
        flex: 1,
        width: "100%",
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    item: {
        fontSize: 18,
        marginBottom: 5,
    },
    foodItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    bulletedPoint: {
        fontSize: 4,
        marginRight: 6,
        color: "#787878",
    },
});

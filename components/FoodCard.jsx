// Module Imports
import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Card, Title, Caption } from "react-native-paper";

// Relative Imports

function FoodCard({ section }) {
    const breakfastImg = require("../assets/cafe_menu/breakfast.jpg");

    return (
        <Card style={styles.card}>
            {/* Create custom card cover */}
            <ImageBackground
                source={breakfastImg}
                style={styles.cardCover}
                imageStyle={{ borderRadius: 4 }}
            />
            <View style={styles.cardContent}>
                <View style={styles.titleWrapper}>
                    <Title style={styles.cardTitle}>{section.title}</Title>
                    <View style={styles.titleUnderline} />
                </View>
                <FlatList
                    keyExtractor={(item) => item}
                    data={section.data}
                    renderItem={({ item }) => (
                        <View style={styles.foodItem}>
                            <Caption key={item}>{item}</Caption>
                        </View>
                    )}
                />
            </View>
        </Card>
    );
}

export default FoodCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
        padding: 10,
    },
    cardCover: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        height: 90,
        marginBottom: 5,
        borderRadius: 10,
    },
    cardContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleWrapper: {
        marginBottom: 5,
    },
    titleUnderline: {
        height: 1.5,
        backgroundColor: "#6c757d",
        marginBottom: 5,
    },
    foodItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

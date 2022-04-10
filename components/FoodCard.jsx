// Module Imports
import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Card, Title, Caption } from "react-native-paper";

function FoodCard({ section }) {
    // Render background image that matches with the food category
    const getImage = (title) => {
        switch (title) {
            case "Breakfast":
                return require("../assets/cafe_menu/breakfast.jpg");
            case "Lunch":
                return require("../assets/cafe_menu/lunch.jpg");
            case "Lunch Rotisserie":
                return require("../assets/cafe_menu/lunch_rotisserie.jpg");
            case "Dinner":
                return require("../assets/cafe_menu/dinner.jpg");
            case "Dinner Rotisserie":
                return require("../assets/cafe_menu/dinner_rotisserie.jpg");
            default:
                return require("../assets/cafe_menu/lunch.jpg");
        }
    };

    return (
        <Card style={styles.card}>
            <ImageBackground
                source={getImage(section.title)}
                style={styles.cardCover}
                imageStyle={{ borderRadius: 4 }}
            />
            {/* Card title with underline */}
            <View style={styles.cardContent}>
                <View style={styles.titleWrapper}>
                    <Title style={styles.cardTitle}>{section.title}</Title>
                    <View style={styles.titleUnderline} />
                </View>
                {/* List of food items */}
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

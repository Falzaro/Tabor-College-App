import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Card, Title, Caption } from "react-native-paper";

function FoodCard({ section }) {
    return (
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
    );
}

export default FoodCard;

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
        padding: 10,
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

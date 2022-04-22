// Module Imports
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { Card, Title } from "react-native-paper";

function SeasonCard({ sportsData, title }) {
    // Render background image that matches with the food category
    const getImage = (title) => {
        switch (title) {
            case "Fall":
                return require("../../assets/athletics/football.jpg");
            case "Winter":
                return require("../../assets/athletics/basketball.jpg");
            case "Spring":
                return require("../../assets/athletics/baseball.jpg");
            default:
                return require("../../assets/athletics/football.jpg");
        }
    };

    return (
        <Card style={styles.card}>
            <ImageBackground
                source={getImage(title)}
                style={styles.cardCover}
                imageStyle={{
                    borderRadius: 4,
                }}
            />
            {/* Card title with underline */}
            <View style={styles.cardContent}>
                <View style={styles.titleWrapper}>
                    <Title style={styles.cardTitle}>{title}</Title>
                    <View style={styles.titleUnderline} />
                </View>
                {/* List of food items */}
                {sportsData?.map((item) => (
                    <View key={`_key${item.sport}`} style={styles.sportItem}>
                        <Text style={styles.itemText} key={item.sport}>
                            {item.sport}
                        </Text>
                    </View>
                ))}
            </View>
        </Card>
    );
}

export default SeasonCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
    sportItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    itemText: {
        fontSize: 16,
        marginBottom: 8,
    },
});

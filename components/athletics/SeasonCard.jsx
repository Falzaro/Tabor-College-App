// Module Imports
import { View, StyleSheet, ImageBackground } from "react-native";
import { Card, Title } from "react-native-paper";
import CustomChip from "../CustomChip";
import { useNavigation } from "@react-navigation/native";

function SeasonCard({ sportsData, season, genderType }) {
    const navigation = useNavigation();

    // Render background image that matches with the season
    const getMensImage = (season) => {
        switch (season) {
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

    const getWomensImage = (season) => {
        switch (season) {
            case "Fall":
                return require("../../assets/athletics/volleyball.jpg");
            case "Winter":
                return require("../../assets/athletics/cheerleading.jpg");
            case "Spring":
                return require("../../assets/athletics/cross_country.jpg");
            default:
                return require("../../assets/athletics/volleyball.jpg");
        }
    };

    return (
        <Card style={styles.card}>
            <ImageBackground
                source={
                    genderType === "men's"
                        ? getMensImage(season)
                        : getWomensImage(season)
                }
                style={styles.cardCover}
                imageStyle={{
                    borderRadius: 4,
                }}
            />
            {/* Card season with underline */}
            <View style={styles.cardContent}>
                <View style={styles.titleWrapper}>
                    <Title style={styles.cardTitle}>{season}</Title>
                    <View style={styles.titleUnderline} />
                </View>
                {/* List of sports */}
                <View style={styles.sportsList}>
                    {sportsData?.map((item) => (
                        <View
                            key={`_key${item.sport}`}
                            style={styles.sportItem}
                        >
                            <CustomChip
                                onPress={() =>
                                    navigation.navigate("Webview", {
                                        url: item.url,
                                        name: item.sport,
                                    })
                                }
                            >
                                {item.sport}
                            </CustomChip>
                        </View>
                    ))}
                </View>
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
        paddingBottom: 5,
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
        marginBottom: 10,
    },
    sportsList: {
        width: "80%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    sportItem: {
        marginBottom: 4,
        paddingHorizontal: 4,
        fontSize: 16,
        marginBottom: 12,
    },
});

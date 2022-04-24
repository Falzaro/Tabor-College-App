// Module Imports
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { Card, Title, Chip } from "react-native-paper";

function SeasonCard({ sportsData, season, genderType }) {
    console.log("sportsData", sportsData);
    // Render background image that matches with the food category
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
                            <Text style={styles.itemText} key={item.sport}>
                                <Chip
                                    onPress={() => console.log(item.sport)}
                                    style={styles.chip}
                                    mode="outlined"
                                    textStyle={styles.chipText}
                                >
                                    {item.sport}
                                </Chip>
                            </Text>
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
    },
    itemText: {
        fontSize: 16,
        marginBottom: 8,
    },
    chip: {
        backgroundColor: "rgb(226, 237, 248)",
        borderColor: "rgb(0, 127, 255)",
    },
    chipText: {
        color: "rgb(0, 106, 213)",
    },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    settings: {
        flex: 1,
        backgroundColor: "#E5E5E5",
        paddingHorizontal: 15,
    },
    card: {
        backgroundColor: "white",
        padding: 25,
        borderRadius: 8,
        marginBottom: 15,
    },
    switchSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    caption: {
        fontSize: 14,
        color: "#858585",
    },
    divider: {
        marginVertical: 12,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    bulletedRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginRight: 25,
    },
    bulletedPoint: {
        fontSize: 4,
        marginRight: 6,
        color: "#787878",
    },
    subHeading: {
        fontSize: 16,
        fontWeight: "500",
        marginRight: 15,
    },
});

import { StyleSheet, View } from "react-native";

const MainCircles = ({ mainButtonsIndex, buttonsContainers }) => {
    return (
        <View style={styles.circlesRow}>
            {buttonsContainers.map((_, index) => (
                <View
                    key={`circle_key_${index}`}
                    style={[
                        styles.circle,
                        {
                            opacity: mainButtonsIndex === index ? 0.4 : 0.15,
                        },
                    ]}
                />
            ))}
        </View>
    );
};

export default MainCircles;

const styles = StyleSheet.create({
    circlesRow: {
        flexDirection: "row",
        justifyContent: "center",
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 30,
        backgroundColor: "#000",
        margin: 8,
        marginBottom: 20,
    },
});

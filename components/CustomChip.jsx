import { StyleSheet } from "react-native";
import { Chip } from "react-native-paper";

const CustomChip = ({ children, onPress }) => {
    return (
        <Chip
            onPress={() => onPress()}
            style={styles.chip}
            mode="outlined"
            textStyle={styles.chipText}
        >
            {children}
        </Chip>
    );
};

export default CustomChip;

const styles = StyleSheet.create({
    chip: {
        backgroundColor: "rgb(226, 237, 248)",
        borderColor: "rgb(0, 127, 255)",
    },
    chipText: {
        color: "rgb(0, 106, 213)",
    },
});

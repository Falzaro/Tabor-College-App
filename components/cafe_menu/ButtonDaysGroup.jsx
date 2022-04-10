import { useState } from "react";
import { StyleSheet } from "react-native";
import { ToggleButton, Text } from "react-native-paper";

function ButtonDaysGroup() {
    const [activeDay, setActiveDay] = useState("Sun");
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return (
        <ToggleButton.Row
            style={styles.toggleButtonRow}
            onValueChange={(value) => setActiveDay(value)}
        >
            {days.map((day, index) => (
                <ToggleButton
                    style={{ width: 48 }}
                    key={day + index}
                    icon={() => <Text>{day}</Text>}
                    value={day}
                    status={activeDay === day ? "checked" : "unchecked"}
                />
            ))}
        </ToggleButton.Row>
    );
}

export default ButtonDaysGroup;

const styles = StyleSheet.create({
    toggleButtonRow: {
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 20,
    },
});

import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ToggleButton, Text } from "react-native-paper";

function ButtonDaysGroup() {
    const [activeDay, setActiveDay] = useState();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        // Set today as the default active day
        setActiveDay(days[new Date().getDay()]);
    }, []);

    console.log(activeDay);
    const handleDayChange = (day) => {
        setActiveDay(day);
    };

    return (
        <ToggleButton.Row
            style={styles.toggleButtonRow}
            onValueChange={handleDayChange}
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

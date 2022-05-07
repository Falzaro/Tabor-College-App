import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ToggleButton, Text } from "react-native-paper";

function ButtonDaysGroup({ activeDay, setActiveDay }) {
    const [days, setDays] = useState([]);

    useEffect(() => {
        const _days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const todayIndex = new Date().getDay();
        // Make today be the first day of the week
        const updatedDays = [
            ..._days.slice(todayIndex),
            ..._days.slice(0, todayIndex),
        ];
        setDays(updatedDays);
        // Set today as the default active day
        setActiveDay(updatedDays[0]);
    }, []);

    const handleDayChange = (day) => {
        // Clicking on the same day will give a null value
        // So we only want to set the active day if the day value is not null
        if (day) {
            setActiveDay(day);
        }
    };

    return (
        <ToggleButton.Row
            style={styles.toggleButtonRow}
            onValueChange={handleDayChange}
        >
            {days.map((day, index) => {
                const isActive = day === activeDay;
                return (
                    // Make the toggle button blue if it is the active day
                    <ToggleButton
                        style={
                            isActive
                                ? styles.activeButton
                                : styles.inactiveButton
                        }
                        key={day + index}
                        icon={() => (
                            <Text
                                style={{
                                    color: isActive ? "#fff" : "#000",
                                }}
                            >
                                {day}
                            </Text>
                        )}
                        value={day}
                        status={isActive ? "checked" : "unchecked"}
                    />
                );
            })}
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
    inactiveButton: {
        width: 50,
        backgroundColor: "#EBEBEB",
        backgroundColor: "white",
        color: "#000",
    },
    activeButton: {
        width: 48,
        backgroundColor: "#0969CD",
        color: "#fff",
    },
});

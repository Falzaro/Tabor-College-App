import * as React from 'react';
import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";

import { List } from 'react-native-paper';
import AccordionManager from '../components/accordions/AccordManager';
function HelpfulHours({ route }) {

  

    const { name } = route;
    const helpfulHoursCover = require("../assets/coverImage/helpfulHours.jpg");
    const coverImage = {
        source: helpfulHoursCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
         <AccordionManager />
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

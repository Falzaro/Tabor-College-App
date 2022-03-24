import React, { useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { List } from 'react-native-paper';

import BusinessOffice from "./accordScreens/BusinessOffice";
import CourtSideGrill from "./accordScreens/CourtSideGrill";
import HelpDesk from "./accordScreens/HelpDesk";
import LibraryHours from "./accordScreens/LibraryHours";
import StudentLife from "./accordScreens/StudentLife";
import StudentSuccess from "./accordScreens/StudentSuccess";


const AccordionManager = () => {
    return (
        <View>
        <ScrollView>
            <BusinessOffice />
            <CourtSideGrill />
            <HelpDesk />
            <LibraryHours />
            <StudentLife />
            <StudentSuccess />
        </ScrollView>

        </View>
    )
}

export default AccordionManager;
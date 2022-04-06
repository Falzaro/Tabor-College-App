import * as React from 'react';
import { StyleSheet, View, Text, VirtualizedList, ScrollView, FlatList } from "react-native";
import Main from "../components/Main";



//import relative 
import BusinessOffice from './HelpfulHoursTabs/BusinessOffice';
import CourtSideGrill from './HelpfulHoursTabs/CourtSideGrill';
import HelpDesk from './HelpfulHoursTabs/HelpDesk';
import StudentLife from './HelpfulHoursTabs/StudentLife';
import StudentSuccess from './HelpfulHoursTabs/StudentSuccess';
import Dinning from './HelpfulHoursTabs/DiningHall';

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
        
        <FlatList    
        ListFooterComponent={
            <View style = {styles.contentContainer}>
                <BusinessOffice />
                <CourtSideGrill />
                <Dinning />
                <HelpDesk />
                <StudentLife />
                <StudentSuccess />
            </View>
        }
          />  
         
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
   
    contentContainer: {
        padding: 10,
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        flexGrow: 1,
    },
});

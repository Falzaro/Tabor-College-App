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
import AdrienneCoffee from './HelpfulHoursTabs/AdrienneCoffee';
import JavaCoffee from './HelpfulHoursTabs/JavaCoffee';
import DormHours from './HelpfulHoursTabs/DormsHours';
import InfoTech from './HelpfulHoursTabs/InformationTech';
import FinancialAid from './HelpfulHoursTabs/FinancialAid';
import MailRoom from './HelpfulHoursTabs/MailRoom';
import TutorCenter from './HelpfulHoursTabs/TutoringCenter';

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
                <AdrienneCoffee />
                <BusinessOffice />
                <CourtSideGrill />
                <Dinning />
                <DormHours />
                <FinancialAid />
                <HelpDesk />
                <InfoTech />
                <JavaCoffee />
                <MailRoom />
                <StudentLife />
                <StudentSuccess />
                <TutorCenter />
               
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

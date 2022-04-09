import { StyleSheet, View, Text, FlatList } from "react-native";
import Main from "../components/Main";

// import Relative
import AcademicOffice from './HelpfulHoursTab/AcademicOffice';
import AdrienneCoffee from './HelpfulHoursTab/AdrienneCoffee';
import BusinessOffice from './HelpfulHoursTab/BusinessOffice';
import CourtSideGrill from './HelpfulHoursTab/CourtSideGrill';
import DiningHall from './HelpfulHoursTab/DiningHall';
import DormHours from './HelpfulHoursTab/DormHours';
import FinancialAid from './HelpfulHoursTab/FinancialAid';
import InfoTech from './HelpfulHoursTab/InfoTech';
import Javajay from './HelpfulHoursTab/Javajay';
import MailRoom from './HelpfulHoursTab/MailRoom';
import StudentLife from './HelpfulHoursTab/StudentLife';
import StudentSuccess from "./HelpfulHoursTab/StudentSuccess";
import TutorCenter from './HelpfulHoursTab/TutoringCenter';


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
                <View style = {styles.center}>
                    <AcademicOffice />
                    <AdrienneCoffee />
                    <BusinessOffice />
                    <CourtSideGrill />
                    <DiningHall />
                    <DormHours />
                    <FinancialAid />
                    <InfoTech />
                    <Javajay />
                    <MailRoom />
                    <StudentLife />
                    <StudentSuccess />
                    <TutorCenter />
                </View>
            }
            />
        </Main>
    );
};

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        padding: 10,
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        flexGrow: 1,
    },
});

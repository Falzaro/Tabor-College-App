import { StyleSheet, View, Text, FlatList } from "react-native";
import Main from "../components/Main";

// import Relative
import AcademicOffice from '../components/HelpfulHoursTab/AcademicOffice';
import AdrienneCoffee from '../components/HelpfulHoursTab/AdrienneCoffee';
import BusinessOffice from '../components/HelpfulHoursTab/BusinessOffice';
import CourtSideGrill from '../components/HelpfulHoursTab/CourtSideGrill';
import DiningHall from '../components/HelpfulHoursTab/DiningHall';
import DormHours from '../components/HelpfulHoursTab/DormHours';
import FinancialAid from '../components/HelpfulHoursTab/FinancialAid';
import InfoTech from '../components/HelpfulHoursTab/InfoTech';
import Javajay from '../components/HelpfulHoursTab/Javajay';
import MailRoom from '../components/HelpfulHoursTab/MailRoom';
import StudentLife from '../components/HelpfulHoursTab/StudentLife';
import StudentSuccess from "../components/HelpfulHoursTab/StudentSuccess";
import TutorCenter from '../components/HelpfulHoursTab/TutoringCenter';


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
            showsVerticalScrollIndicator = {false}
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

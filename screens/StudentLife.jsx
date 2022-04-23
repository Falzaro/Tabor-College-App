import { StyleSheet, View , Text } from "react-native";
import Main from "../components/Main";
import {Card } from 'react-native-paper';

import StudentLinks from '../components/student_life/Student_Links';
import SocialMedia from '../components/student_life/StudentLifeSocialMedia';
function StudentLife({ route }) {
    const { name } = route;
    const studentLifeCover = require("../assets/coverImage/studentLife.png");
    const coverImage = {
        source: studentLifeCover,
        darkness: "rgba(0, 0, 0, 0.11)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>     
                <StudentLinks />
                <SocialMedia />
            </View>
        </Main>
    );
}

export default StudentLife;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 5,
        paddingBottom: 5,
    },
});

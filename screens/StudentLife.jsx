import { StyleSheet, View } from "react-native";
import Main from "../components/Main";

import StudentLifeDrawer from '../components/student_life/Student_life_drawer';

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
                <StudentLifeDrawer />
            </View>
        </Main>
    );
}

export default StudentLife;

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
});

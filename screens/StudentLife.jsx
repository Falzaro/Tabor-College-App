import { StyleSheet, View, FlatList } from "react-native";
import Main from "../components/Main";

import StudentLinks from "../components/student_life/Student_Links";
import SocialMedia from "../components/student_life/StudentLifeSocialMedia";
import ViewMoreButton from "../components/ViewMoreButton";
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
            <FlatList
                style={styles.center}
                ListHeaderComponent={
                    <View>
                        <StudentLinks />
                        <SocialMedia />
                        <ViewMoreButton
                            url="https://tabor.edu/undergraduate/student-life/"
                            name="Student Life"
                        />
                    </View>
                }
            />
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

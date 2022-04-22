import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Main from "../components/Main";

import { db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

import DrawerTab from '../components/student_life/Student_life_drawer';

function StudentLife({ route }) {
    const [studentLifeData, setStudentLifeData] = useState([]);
        useEffect(() => {
            const docRef = doc(db, "student life links", "student life links");
            getDoc(docRef)
                .then((doc) => {
                    setStudentLifeData(doc.data().sections)
                })
                .catch((err) => {
                    console.log(err);
                })
        }, []);
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
               
               <Text>{studentLifeData.about}</Text>
               <FlatList
                    style={{ marginBottom: 5 }}
                    showsVerticalScrollIndicator={false}
                    listKey={(_, index) => `_key${index}`}
                    keyExtractor={(_, index) => `_key${index}`}
                    data={studentLifeData}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            {/* Show days */}
                            <Text style={styles.days}>{item.title}</Text>
                            <Text style={styles.days}>{item.links}</Text>
                            
                        </View>
                    )}
                />
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

import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Main from "../components/Main";

import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

import DropDownTab from "../components/helpful_hours/DropDownTab";


function HelpfulHours({ route }) {
    const [helpfulHoursTab, setHelpfulHoursTab] = useState([]);
   
    const { name } = route;
    const helpfulHoursCover = require("../assets/coverImage/helpfulHours.jpg");
    const coverImage = {
        source: helpfulHoursCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0.5,
    };

    const item = [];
    useEffect(() => { 
        getDocs(collection(db, "test data"))
            .then((snapshot) =>{
                const helpfulHours = snapshot.docs.map((doc) => doc.data());
                setHelpfulHoursTab(helpfulHours);
            })
            .catch((err) => {
                console.log(err);
            });
          
        
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <FlatList 
                    showsVerticalScrollIndicator = {false}
                    data={helpfulHoursTab}
                    listKey={(item, index) => `_key${index.toString()}`}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    renderItem={({ item: section }) => (
                        <DropDownTab section={section} />
                    )}
                />
            </View>
        </Main>
    );
}

    

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingHorizontal: 18,
        justifyContent: "center",
        //alignItems: "center",
    },
});

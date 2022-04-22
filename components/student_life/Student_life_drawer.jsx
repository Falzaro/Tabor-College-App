import React, {useState, useEffect} from "react";
import { StyleSheet, FlatList, View, Text} from "react-native";
import { Drawer, List } from 'react-native-paper';



const StudentLifeDrawer =  ({section}) => {
    const [active, setActive] = useState();
    return (
    <View style={styles.container}>
      <List.Accordion
        title="Student Life"
        left={props => <List.Icon {...props} icon="menu" />}>
        <FlatList 
            keyExtractor={(item) => item}
            data = {section}
            renderItem={({item}) => (
                <View>
                    <Text>{item.links}</Text>
                </View>
            )}
        />
      </List.Accordion>

     
   
       
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
      //  flex: 1,
        paddingTop: 20,
        paddingHorizontal: 18,
        
    },
    drawer: {
        backgroundColor: 'blue',
       // marginRight: 200,
        
    }
})
export default StudentLifeDrawer;

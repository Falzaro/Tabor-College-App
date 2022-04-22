import React, {useState, useEffect} from "react";
import { StyleSheet, FlatList, View, Text} from "react-native";
import { Drawer } from 'react-native-paper';

import { db } from "../../firebase/config";
import { getDoc,doc } from "firebase/firestore";

const StudentLifeDrawer =  () => {
    const [active, setActive] = useState();
    return (
        <View style={styles.container}>
            <Drawer.Section title="Student Life">
            <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      
            </Drawer.Section>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      //  flex: 1,
        paddingTop: 20,
        paddingHorizontal: 18,
        
    }
})
export default StudentLifeDrawer;

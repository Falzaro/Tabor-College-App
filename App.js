import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import MenuScreen from './screens/MenuScreen.js';


export default function App() {
    return (
       <View style={styles.container}>
          <MenuScreen title="Tabor College" />
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
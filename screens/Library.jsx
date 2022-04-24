import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Linking, FlatList, ScrollView } from "react-native";
import Main from "../components/Main";
import { Card, Title, Subheading, Paragraph, Button } from 'react-native-paper';
import LibraryHours from '../components/library_screen/Library_Hours';




function Library({ route }) {
    const { name } = route;
    const libraryCover = require("../assets/coverImage/library.jpg");
    const coverImage = {
        source: libraryCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 1,
    };
    return (
       
        <Main name={name} coverImage={coverImage}>
            <View  style = {styles.container}>
                <LibraryHours />
            </View>
        </Main>
      
    );
}

export default Library;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 18,
    }
   
});
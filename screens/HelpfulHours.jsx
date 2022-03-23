import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Modal } from "react-native";
import Dialog, { DialogContent } from 'react-native-popup-dialog';

import { Alert } from "react-native-web";
import Main from "../components/Main";

//import Modal manager {This handle modal screens}
import ModalManager from "../components/modal/modalManager";

function HelpfulHours({ route }) {

    //modal 
    const [modalOpen, setModal] = useState(false);

    const openModal = event => {
        event.preventDefault();
        const {
          target: {
            dataset: { modal }
          }
        } = event;
        if (modal) setModal(modal);
      };
    
      const closeModal = () => {
        setModal('');
      };

    // 
    const { name } = route;
    const helpfulHoursCover = require("../assets/coverImage/helpfulHours.jpg");
    const coverImage = {
        source: helpfulHoursCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0.5,
    };

    
    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <ModalManager closeFn={closeModal} modal={modalOpen} />
            </View>
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        padding: 10,
    },
});

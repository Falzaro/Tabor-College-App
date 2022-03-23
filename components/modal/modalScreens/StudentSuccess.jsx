import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from './modalStyles';

const StudentSuccess = () => {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Contact Information</Text>
            <Text style={styles.modalText}>Phone # 00000000</Text>


            <Text style={styles.modalText}>Hours: </Text>
            <Text style={styles.modalText}>Import Time here</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Student Success</Text>
      </TouchableOpacity>
    </View>
    );
};



  export default StudentSuccess;
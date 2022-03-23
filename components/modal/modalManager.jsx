import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

//import relative
import HelpDesk from './modalScreens/HelpDesk';
import CourtSideGrill from './modalScreens/CourtSideGrill';
import StudentSuccess from './modalScreens/StudentSuccess';
import BusinessOffice from './modalScreens/BusinessOffice';
import StudentLife from './modalScreens/StudentLife';

const ModalManager = ({ closeFn, modal = '' }) => {
    return (
      <>
      <View style={styles.center}>
        <CourtSideGrill closeFn={closeFn} open={modal === 'modal-two'} />
        <HelpDesk closeFn={closeFn} open={modal === 'modal-one'} />
        <StudentSuccess closeFn={closeFn} open={modal === 'modal-two'} />
        <BusinessOffice closeFn={closeFn} open={modal === 'modal-two'} />
        <StudentLife closeFn={closeFn} open={modal === 'modal-two'} />
    </View>
      </>
    );
  };

const styles = StyleSheet.create({
    center: {
        flex: 1,
        
        //justifyContent: "center",
        //alignItems: "center",
        marginTop: 0
    },
    

  });
  
  export default ModalManager;
  
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    background: {
        flex: 1,
        //backgroundColor: '#fff',
      },
    contentContainer: {
        paddingHorizontal: 18,
        paddingTop: 10,
        width: "100%",  
        
    },
    cardsContainer: {
       // flex: 1,
       width: "100%", 
          
    },
    card: {
        marginBottom: 10,
        //padding: 10,
        //borderBottomColor: 'blue',
    },
    displayItem: {
        //flexDirection: "row",
       alignItems: "center",
        //backgroundColor: "white",
    },
    title: {
        fontSize: 18,
        //marginBottom: 5,
        textAlign: "center",
       
    },
    names:{
      alignItems: "center",
        //backgroundColor: "white",
        textAlign: "center",
      marginTop: 10,
      fontSize: 15
    },
    contacts:{
      alignItems: "center",
      //backgroundColor: "white",
      textAlign: "center",
      fontSize: 15,
      marginTop: 10,
      color: "blue"
    },
    subheading: {
      marginTop: 5,
      fontSize: 15
    }
    

    });
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

import Main from "../components/Main";
import UsefulNumbers from "./OtherScreens/UsefulNumbers";

import TaborCollege from "../screens/TaborCollege";

// this is homeScreen
function HelpfulHours({ route, navigation }) {
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
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('UsefulNumbers')}
                    >
                        <Text>Useful Numbers</Text>
            
                    </TouchableOpacity>
                </View>
            </View>
        </Main>
    );
}
const Stack = createStackNavigator();
  export default function App({}) {
    return (
     
        <Stack.Navigator
          initialRouteName="Helpful Hours"
          screenOptions={{ headerShown: true, }}
        >
          <Stack.Screen name="Helpful Hours" component={HelpfulHours} 
            options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: "",
                headerBackTitle: "back",
                headerStatusBarHeight: 10,
            }} 
        />
          <Stack.Screen name="UsefulNumbers" component={UsefulNumbers} 
            options={{
                headerStatusBarHeight: 50,
                headerTitle: "Useful Numbers",
                headerBackTitle: "back",
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#003082",
                },
                headerTitleStyle: {
                    fontSize: 20,
                    color: "#fff",
                },
                headerBackTitleStyle: {
                    color: 'white'
    }
            }}
        />
        </Stack.Navigator>
      
    );
  }
  


  

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: "center",
       
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        flexWrap: "wrap",
      },
    container: {
        flex: 1,
        padding: 10,
    },
});

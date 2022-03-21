import { StyleSheet, View, Text, Button, TouchableOpacity, Alert } from "react-native";
import Main from "../components/Main";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import TestScreens from '../screens/TestScreens';

// this is homeScreen
function HelpfulHours({ route, navigation, }) {
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
                onPress={() => navigation.push('TestScreens')}
            >
            <Text>Useful Numbers</Text>
            
      </TouchableOpacity>
            </View>
            </View>
        </Main>
    );
}


  const Stack = createStackNavigator();
  export default function App() {
    return (
      <NavigationContainer independent = {true}>
        <Stack.Navigator
          initialRouteName="HelpfulHours"
          screenOptions={{ headerShown: false, }}
        >
          <Stack.Screen name="HelpfulHours" component={Root}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  function Root() {
    return (

      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={HelpfulHours} options={{header:() =>null, headerLeft:() =>null}} />
        <Stack.Screen 
            name="TestScreens" 
            component={TestScreens} 
            options={{title: 'TestSCreens',
            headerTransparent: true,
            headerTitleAlign: 'center',
            //headerLeft: () => null,
            headerStatusBarHeight: 60,
            }} />
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

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Canvas from "../assets/Canvas";

export const buttonsData = [
    {
        label: "Canvas",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Canvas />,
    },
    {
        label: "Student Life",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="people" size={50} />,
    },
    {
        label: "Dining",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <MaterialIcons name="local-dining" size={50} />,
    },
    {
        label: "Campus Cafe",
        link: "https://tab-web.scansoftware.com/cafeweb/login",
        Image: <Ionicons name="cafe" size={50} />,
    },
    {
        label: "Calendar",
        link: "https://tabor.edu/calendar/",
        Image: <FontAwesome5 name="calendar" size={50} />,
    },
    {
        label: "Jayshop",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <MaterialCommunityIcons name="shopping-outline" size={50} />,
    },
    {
        label: "Maps",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <FontAwesome5 name="map-marked-alt" size={50} />,
    },
    {
        label: "Sports",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="american-football" size={50} />,
    },
    {
        label: "Helpful Hours",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <MaterialCommunityIcons name="account-clock-outline" size={50} />
        ),
    },
    {
        label: "News",
        link: "https://tabor.edu/news",
        Image: <FontAwesome name="newspaper-o" size={50} />,
    },
    {
        label: "Notifications",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="notifications-outline" size={40} />,
    },
    {
        label: "Library",
        link: "https://taborcollege.libguides.com/library",
        Image: <Ionicons name="library" size={40} />,
    },
];

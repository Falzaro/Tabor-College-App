import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const buttonsData = [
    {
        label: "Canvas",
        link: "https://tabor.instructure.com/login/ldap",
        Image: null,
    },
    {
        label: "Student Life",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="people" size={50} color="#003082" />,
    },
    {
        label: "Dining",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <MaterialIcons name="local-dining" size={50} color="#003082" />,
    },
    {
        label: "Campus Cafe",
        link: "https://tab-web.scansoftware.com/cafeweb/login",
        Image: <Ionicons name="cafe" size={50} color="#003082" />,
    },
    {
        label: "Calendar",
        link: "https://tabor.edu/calendar/",
        Image: <FontAwesome5 name="calendar" size={50} color="#003082" />,
    },
    {
        label: "Jayshop",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <MaterialCommunityIcons
                name="shopping-outline"
                size={50}
                color="#003082"
            />
        ),
    },
    {
        label: "Maps",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <FontAwesome5 name="map-marked-alt" size={50} color="#003082" />,
    },
    {
        label: "Sports",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="american-football" size={50} color="#003082" />,
    },
    {
        label: "Helpful Hours",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <MaterialCommunityIcons
                name="account-clock-outline"
                size={50}
                color="#003082"
            />
        ),
    },
    {
        label: "News",
        link: "https://tabor.edu/news",
        Image: <FontAwesome name="newspaper-o" size={50} color="#003082" />,
    },
    {
        label: "Notifications",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <Ionicons name="notifications-outline" size={40} color="#003082" />
        ),
    },
    {
        label: "Library",
        link: "https://taborcollege.libguides.com/library",
        Image: <Ionicons name="library" size={40} color="#003082" />,
    },
];

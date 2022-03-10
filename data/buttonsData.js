import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Canvas from "../assets/Canvas";

const SIZE = 36;
const COLOR = "#373737";

export const buttonsData = [
    {
        label: "Canvas",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Canvas color={COLOR} size={SIZE} />,
    },
    {
        label: "Student Life",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="people" size={SIZE} color={COLOR} />,
    },
    {
        label: "Dining",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <MaterialIcons name="local-dining" size={SIZE} color={COLOR} />,
    },
    {
        label: "Campus Cafe",
        link: "https://tab-web.scansoftware.com/cafeweb/login",
        Image: <Ionicons name="cafe" size={SIZE} color={COLOR} />,
    },
    {
        label: "Calendar",
        link: "https://tabor.edu/calendar/",
        Image: <FontAwesome5 name="calendar" size={SIZE} color={COLOR} />,
    },
    {
        label: "Jayshop",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <MaterialCommunityIcons
                name="shopping-outline"
                size={SIZE}
                color={COLOR}
            />
        ),
    },
    {
        label: "Maps",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <FontAwesome5 name="map-marked-alt" size={SIZE} color={COLOR} />,
    },
    {
        label: "Sports",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Ionicons name="american-football" size={SIZE} color={COLOR} />,
    },
    {
        label: "Helpful Hours",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <MaterialCommunityIcons
                name="account-clock-outline"
                size={SIZE}
                color={COLOR}
            />
        ),
    },
    {
        label: "News",
        link: "https://tabor.edu/news",
        Image: <FontAwesome name="newspaper-o" size={SIZE} color={COLOR} />,
    },
    {
        label: "Notifications",
        link: "https://tabor.instructure.com/login/ldap",
        Image: (
            <Ionicons name="notifications-outline" size={SIZE} color={COLOR} />
        ),
    },
    {
        label: "Library",
        link: "https://taborcollege.libguides.com/library",
        Image: <Ionicons name="library" size={SIZE} color={COLOR} />,
    },
];

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Canvas from "../assets/Canvas";

const SIZE = 36;
const COLOR = "#373737";

// Objects for the buttons
// Every three buttons will get rendered as a row in the app
export const buttonsData = [
    // Row 1
    {
        label: "Cafe Menu",
        link: "https://oncampusdining.com/tabor/menus/?d=2022-03-09",
        Image: <Ionicons name="fast-food-outline" size={SIZE} color={COLOR} />,
    },
    {
        label: "Sports",
        link: "https://www.taborbluejays.com/",
        Image: (
            <Ionicons
                name="american-football-outline"
                size={SIZE}
                color={COLOR}
            />
        ),
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
    // Row 2
    {
        label: "News",
        link: "https://tabor.edu/news",
        Image: <FontAwesome name="newspaper-o" size={SIZE} color={COLOR} />,
    },
    {
        label: "Jayshop",
        link: "https://tabor.edu/shop/",
        Image: (
            <MaterialCommunityIcons
                name="shopping-outline"
                size={SIZE}
                color={COLOR}
            />
        ),
    },
    {
        label: "Library",
        link: "https://taborcollege.libguides.com/library",
        Image: <Ionicons name="library-outline" size={SIZE} color={COLOR} />,
    },
    // Row 3
    {
        label: "Student Life",
        link: "https://tabor.edu/undergraduate/student-life/",
        Image: <Ionicons name="people-outline" size={SIZE} color={COLOR} />,
    },
    {
        label: "Maps",
        link: "https://goo.gl/maps/78K3q8qKUso6ZYYR7",
        Image: <Feather name="map" size={SIZE} color={COLOR} />,
    },
    {
        label: "Campus Cafe",
        link: "https://tab-web.scansoftware.com/cafeweb/login",
        Image: <Ionicons name="cafe-outline" size={SIZE} color={COLOR} />,
    },
    // Row 4
    {
        label: "Canvas",
        link: "https://tabor.instructure.com/login/ldap",
        Image: <Canvas color={COLOR} size={SIZE} />,
    },
    {
        label: "Calendar",
        link: "https://tabor.edu/calendar/",
        Image: <AntDesign name="calendar" size={SIZE} color={COLOR} />,
    },
    {
        label: "Faculty",
        link: "https://tabor.edu/faculty/",
        Image: (
            <FontAwesome5 name="chalkboard-teacher" size={SIZE} color={COLOR} />
        ),
    },
];

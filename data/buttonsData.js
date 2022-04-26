// Module Imports
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";

// Relative Imports
import Canvas from "../assets/Canvas";
import { db } from "../firebase/config";

const SIZE = 36;
const COLOR = "#373737";

const storage = getStorage();

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
        label: "Athletics",
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
        label: "Maps",
        link: "https://goo.gl/maps/78K3q8qKUso6ZYYR7",
        Image: <Feather name="map" size={SIZE} color={COLOR} />,
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
    // External buttons
    {
        label: "News",
        link: "https://tabor.edu/news",
        Image: <FontAwesome name="newspaper-o" size={SIZE} color={COLOR} />,
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
        label: "Arts",
        link: "https://tabor.edu/performing-arts/",
        Image: <FontAwesome5 name="theater-masks" size={SIZE} color={COLOR} />,
    },
];

const getExternalOrScreenButtons = async (taborCollegeDoc, buttonType) => {
    return await Promise.all(
        taborCollegeDoc.data()[buttonType].map(async (button) => {
            const gsReference = ref(storage, button.image);
            const url = await getDownloadURL(gsReference);
            button.image = url;
            return button;
        })
    );
};

const divideButtonsIntoContainers = (buttons) => {
    const containers = [];
    for (let i = 0; i < buttons.length; i += 12) {
        containers.push(buttons.slice(i, i + 12));
    }
    return containers;
};

export const getButtonsData = async () => {
    const taborCollegeRef = doc(db, "tabor college", "main content");
    const taborCollegeDoc = await getDoc(taborCollegeRef);
    const externalButtons = await getExternalOrScreenButtons(
        taborCollegeDoc,
        "external buttons"
    );
    const screenButtons = await getExternalOrScreenButtons(
        taborCollegeDoc,
        "screen buttons"
    );

    const mainButtons = [...externalButtons, ...screenButtons];
    return divideButtonsIntoContainers(mainButtons);
};

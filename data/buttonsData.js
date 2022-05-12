// Module Imports
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { doc, onSnapshot, getDoc, setDoc } from "firebase/firestore";

// Relative Imports
import { db } from "../firebase/config";

const storage = getStorage();

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

const divideContainerIntoRows = (container) => {
    const rows = [];
    const emptyEntry = {
        name: "",
        url: "",
        image: "",
    };
    for (let i = 0; i < container.length; i += 3) {
        // Create a row with 3 buttons. If there are less than 3 buttons, fill the row with empty buttons.
        const row = container.slice(i, i + 3);
        if (row.length < 3) {
            rows.push([...row, ...Array(3 - row.length).fill(emptyEntry)]);
        } else {
            rows.push(row);
        }
    }
    return rows;
};

const divideButtonsIntoContainers = (buttons) => {
    const containers = [];
    for (let i = 0; i < buttons.length; i += 12) {
        containers.push(divideContainerIntoRows(buttons.slice(i, i + 12)));
    }
    return containers;
};

const taborCollegeRef = doc(db, "tabor college", "main content");
const taborCollegeData = {
    "external buttons": [
        {
            name: "Canvas",
            url: "https://tabor.instructure.com/login/ldap",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/black canvas.png",
        },
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/news.png",
            name: "News",
            url: "https://tabor.edu/news",
        },
        {
            url: "https://tab-web.scansoftware.com/cafeweb/login",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/cafe.png",
            name: "Campus Cafe",
        },
        {
            url: "https://tabor.edu/calendar/",
            name: "Calendar",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/calendar.png",
        },
        {
            url: "https://tabor.edu/performing-arts/",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/arts.png",
            name: "Performing Arts",
        },
        {
            name: "Youtube",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/arts.png",
            url: "https://callstack.github.io/react-native-paper/divider.html",
        },
        {
            name: "Font Awesome",
            url: "https://maketintsandshades.com/#f8f8f8",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/cafe menu.png",
        },
        {
            name: "Tabor",
            url: "https://mywsu.wichita.edu/index.html",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/news.png",
        },
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/calendar.png",
            name: "ACDC",
            url: "https://mywsu.wichita.edu/index.html",
        },
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college external buttons/library.png",
            name: "Library",
            url: "https://taborcollege.libguides.com/library",
        },
    ],
    "screen buttons": [
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/cafe menu.png",
            url: "",
            name: "Dining Hall",
        },
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/sports.png",
            name: "Athletics",
            url: "",
        },
        {
            url: "",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/helpful hours.png",
            name: "Helpful Hours",
        },
        {
            name: "Maps",
            url: "",
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/map.png",
        },
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/jayshop.png",
            name: "Jayshop",
            url: "",
        },
        {
            image: "gs://senior-design-i-prototype.appspot.com/tabor college screen buttons/student life.png",
            url: "",
            name: "Student Life",
        },
    ],
};

export const getButtonsData = (setButtonsContainers) => {
    // Add collection
    // setDoc(doc(db, "tabor college", "main content"), taborCollegeData);
    return onSnapshot(taborCollegeRef, async (taborCollegeDoc) => {
        // const taborCollegeData = JSON.stringify(taborCollegeDoc.data());
        // console.log(taborCollegeData);

        const externalButtons = await getExternalOrScreenButtons(
            taborCollegeDoc,
            "external buttons"
        );
        const screenButtons = await getExternalOrScreenButtons(
            taborCollegeDoc,
            "screen buttons"
        );
        // sort external buttons by name
        const sortedExternalButtons = externalButtons.sort((a, b) =>
            a.name < b.name ? -1 : 1
        );
        const sortedScreenButtons = screenButtons.sort((a, b) =>
            a.name < b.name ? -1 : 1
        );

        // const mainButtons = [...screenButtons, ...externalButtons];
        const mainButtons = [...sortedScreenButtons, ...sortedExternalButtons];
        setButtonsContainers(divideButtonsIntoContainers(mainButtons));
    });
};

export const getScreenButtons = async () => {
    const taborCollegeDoc = await getDoc(taborCollegeRef);
    const screenButtons = await getExternalOrScreenButtons(
        taborCollegeDoc,
        "screen buttons"
    );

    return screenButtons;
};

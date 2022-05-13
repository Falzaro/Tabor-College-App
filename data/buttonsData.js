// Module Imports
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { doc, onSnapshot, getDoc } from "firebase/firestore";

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

export const getButtonsData = (setButtonsContainers) => {
    // Add collection
    return onSnapshot(taborCollegeRef, async (taborCollegeDoc) => {
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

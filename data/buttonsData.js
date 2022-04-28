// Module Imports
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";

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

const divideButtonsIntoContainers = (buttons) => {
    const containers = [];
    for (let i = 0; i < buttons.length; i += 12) {
        containers.push(buttons.slice(i, i + 12));
    }
    return containers;
};

const taborCollegeRef = doc(db, "tabor college", "main content");

export const getButtonsData = async () => {
    const taborCollegeDoc = await getDoc(taborCollegeRef);
    const externalButtons = await getExternalOrScreenButtons(
        taborCollegeDoc,
        "external buttons"
    );
    const screenButtons = await getExternalOrScreenButtons(
        taborCollegeDoc,
        "screen buttons"
    );

    const mainButtons = [...screenButtons, ...externalButtons];
    return divideButtonsIntoContainers(mainButtons);
};

export const getScreenButtons = async () => {
    const taborCollegeDoc = await getDoc(taborCollegeRef);
    const screenButtons = await getExternalOrScreenButtons(
        taborCollegeDoc,
        "screen buttons"
    );

    return screenButtons;
};

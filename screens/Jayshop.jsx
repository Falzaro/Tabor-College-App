import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";

import Main from "../components/Main";
import { db } from "../firebase/config";
import MainButton from "../components/MainButton";
import { getButtonsData } from "../data/buttonsData";

function Jayshop({ route }) {
    const [externalButtons, setExternalButtons] = useState([]);
    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
    const storage = getStorage();

    useEffect(() => {
        const taborCollegeRef = doc(db, "tabor college", "main content");
        const getExternalButtons = async () => {
            const doc = await getDoc(taborCollegeRef);
            return await Promise.all(
                doc.data()["external buttons"].map(async (button) => {
                    const gsReference = ref(storage, button.image);
                    const url = await getDownloadURL(gsReference);
                    button.image = url;
                    return button;
                })
            );
        };
        getExternalButtons().then((data) => setExternalButtons(data));
    }, []);

    useEffect(() => {
        // getButtonsData().then((data) => setExternalButtons(data));
        getButtonsData();
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                {externalButtons.map((button, i) => {
                    return (
                        <MainButton
                            key={`key_${i}`}
                            label={button.name}
                            link={button.url}
                            Image={
                                <Image
                                    source={{ uri: button.image }}
                                    style={styles.icon}
                                    alt="youtube"
                                    resizeMode="contain"
                                />
                            }
                        />
                    );
                })}
            </View>
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        height: 36,
        aspectRatio: 1,
    },
});

import React, { useState, useEffect } from "react";
import { Image, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Title, Subheading } from "react-native-paper";

import styles from "./styles";

// Relative Imports
import { db } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const JayShopCarousel = () => {
    const [getImage, setImage] = useState([]);

    useEffect(() => {
        // Get the  from firebase version 9
        const docRef = doc(db, "products", "CollectAllDataFromJayShop");
        const unsub = onSnapshot(docRef, (doc) => {
            const data = doc.data().sections;
            setImage(data);
        });
        return unsub;
    }, []);

    return (
        <View style={styles.container}>
            <Title style={styles.title}>Available Products:</Title>
            <Carousel
                layout={"default"}
                data={getImage}
                enableSnap={true} // this must be true for " loop " to work
                loop // this set item in a loop
                decelerationRate="fast"
                useScrollView={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={({ item: section }) => (
                    <View style={styles.card}>
                        <Image
                            style={styles.imageLayout}
                            source={{ uri: section.image }}
                        />
                        <Subheading style={styles.price}>
                            {section.price}
                        </Subheading>
                        <Subheading style={styles.name}>
                            {section.name}
                        </Subheading>
                    </View>
                )}
            />
        </View>
    );
};

export default JayShopCarousel;

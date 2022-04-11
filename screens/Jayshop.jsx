import { StyleSheet, View, Text, FlatList } from "react-native";
import Main from "../components/Main";

import JayShopCarousel from '../components/Jay_Shop/Carousel';
import JayShopData from '../components/Jay_Shop/JayShopData';

function Jayshop({ route }) {
    const { name } = route;
    const jayshopCover = require("../assets/coverImage/jayshop.png");
    const coverImage = {
        source: jayshopCover,
        darkness: "rgba(0, 0, 0, 0.10)",
        blurRadius: 0.5,
    };
    return (
        <Main name={name} coverImage={coverImage}>
            <FlatList style={styles.center}
                showsVerticalScrollIndicator = {false}
                ListFooterComponent={
                    <View>
                        <JayShopData />
                        <JayShopCarousel />
                    </View>
                }
            />
        </Main>
    );
}

export default Jayshop;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
});

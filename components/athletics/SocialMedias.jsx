import { StyleSheet, Text, View, Image } from "react-native";
import SportsBanner from "./SportsBanner";

const SocialMedias = () => {
    return (
        <View style={styles.socialMedias}>
            <SportsBanner headline="Social Medias" />
            <View style={styles.socialMediaContainer}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require("../../assets/athletics/social_medias/youtube_icon.png")}
                        style={styles.socialMediaIcon}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.space} />
                <View style={styles.imageWrapper}>
                    <Image
                        source={require("../../assets/athletics/social_medias/twitter.png")}
                        style={styles.socialMediaIcon}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.space} />
                <View style={styles.imageWrapper}>
                    <Image
                        source={require("../../assets/athletics/social_medias/instagram_icon.png")}
                        style={styles.socialMediaIcon}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
};

export default SocialMedias;

const styles = StyleSheet.create({
    socialMedias: {
        flex: 1,
        marginBottom: 30,
    },
    socialMediaIcon: {
        height: 36,
        aspectRatio: 1,
    },
    socialMediaContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    },
    space: {
        width: 40,
    },
});

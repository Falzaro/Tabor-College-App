import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Linking,
} from "react-native";
import SportsBanner from "./SportsBanner";

const SocialMedias = () => {
    const handleMediaPress = (mediaLink) => {
        Linking.openURL(mediaLink);
    };

    return (
        <View style={styles.socialMedias}>
            <SportsBanner headline="Social Medias" />
            <View style={styles.socialMediaContainer}>
                <TouchableOpacity
                    onPress={() =>
                        handleMediaPress(
                            "https://www.youtube.com/channel/UC5hEYiIzYABiMThMhPj12tQ/videos"
                        )
                    }
                >
                    <Image
                        source={require("../../assets/athletics/social_medias/youtube_icon.png")}
                        style={styles.socialMediaIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity
                    onPress={() =>
                        handleMediaPress(
                            "https://twitter.com/gotaborbluejays?lang=en"
                        )
                    }
                >
                    <Image
                        source={require("../../assets/athletics/social_medias/twitter.png")}
                        style={styles.socialMediaIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity
                    onPress={() =>
                        handleMediaPress(
                            "https://www.instagram.com/taborbluejays/?hl=en"
                        )
                    }
                >
                    <Image
                        source={require("../../assets/athletics/social_medias/instagram_icon.png")}
                        style={styles.socialMediaIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SocialMedias;

const styles = StyleSheet.create({
    socialMedias: {
        flex: 1,
        marginBottom: 20,
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

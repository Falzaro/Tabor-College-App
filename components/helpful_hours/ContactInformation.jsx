import { Linking, StyleSheet } from "react-native";
import { Card, Title, Subheading } from "react-native-paper";

const ContactInformation = ({ contactInfo }) => {
    contactInfo.url && console.log(contactInfo);
    return (
        <Card style={styles.card}>
            <Title style={styles.title}>Contact Information</Title>
            {/* Phone number */}
            {contactInfo.phone && (
                <Subheading
                    onPress={() => Linking.openURL(`tel:${contactInfo.phone}`)}
                    style={styles.contact}
                >
                    {contactInfo.phone} {contactInfo.ext}
                </Subheading>
            )}
            {/* Email 1 */}
            {contactInfo.email && (
                <Subheading
                    onPress={() =>
                        Linking.openURL(`mailto:${contactInfo.email}`)
                    }
                    style={styles.contact}
                >
                    {contactInfo.email}
                </Subheading>
            )}
            {/* Email 2 */}
            {contactInfo.email2 && (
                <Subheading
                    onPress={() =>
                        Linking.openURL(`mailto:${contactInfo.email2}`)
                    }
                    style={styles.contact}
                >
                    {contactInfo.email2}
                </Subheading>
            )}
            {/* Url */}
            {Boolean(contactInfo.url) && (
                <Subheading
                    onPress={() => Linking.openURL(contactInfo.url)}
                    style={styles.contact}
                >
                    {contactInfo.url}
                </Subheading>
            )}
            {!contactInfo && (
                <Subheading style={{ textAlign: "center" }}>
                    No contact information available
                </Subheading>
            )}
        </Card>
    );
};

export default ContactInformation;

const styles = StyleSheet.create({
    card: {
        paddingBottom: 10,
    },
    contact: {
        textAlign: "center",
        color: "#003082",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 5,
    },
    text: {
        textAlign: "center",
    },
    location: {
        textAlign: "center",
    },
});

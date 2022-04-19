import { useEffect, useState } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Card, Title, Subheading } from "react-native-paper";

const LibraryContactInformation = ({ contactInfo }) => {
    return (
        <Card style={styles.card}>
            <Title style={styles.title}>Contact Information</Title>
            {/* Phone number */}
            {Boolean(contactInfo?.phone) && (
                <Subheading
                    onPress={() => Linking.openURL(`tel:${contactInfo?.phone}`)}
                    style={styles.contact}
                >
                    {contactInfo?.phone} {contactInfo?.ext}
                </Subheading>
            )}
            {/* Email 1 */}
            {Boolean(contactInfo?.email1) && (
                <Subheading
                    onPress={() =>
                        Linking.openURL(`mailto:${contactInfo?.email1}`)
                    }
                    style={styles.contact}
                >
                    {contactInfo?.email1}
                </Subheading>
            )}
            {/* Email 2 */}
            {Boolean(contactInfo?.email2) && (
                <Subheading
                    onPress={() =>
                        Linking.openURL(`mailto:${contactInfo?.email2}`)
                    }
                    style={styles.contact}
                >
                    {contactInfo?.email2}
                </Subheading>
            )}
             {/* Email 3 */}
             {Boolean(contactInfo?.email3) && (
                <Subheading
                    onPress={() =>
                        Linking.openURL(`mailto:${contactInfo?.email3}`)
                    }
                    style={styles.contact}
                >
                    {contactInfo?.email3}
                </Subheading>
            )}
            {/* Url */}
            {Boolean(contactInfo?.url) && (
                <Subheading
                    onPress={() => Linking.openURL(contactInfo?.url)}
                    style={styles.contact}
                >
                    {contactInfo?.url}
                </Subheading>
            )}
           
        </Card>
    );
};

export default LibraryContactInformation;

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
});

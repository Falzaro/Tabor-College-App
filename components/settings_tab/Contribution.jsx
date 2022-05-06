import { Text, View } from "react-native";
import { Title, Divider, Subheading } from "react-native-paper";
import { styles } from "./styles";

function Contribution() {
    return (
        <>
            {/* Contribution */}
            <View style={styles.card}>
                <Title>Contribution</Title>
                <Divider style={styles.divider} />
                <View style={styles.row}>
                    <Subheading style={styles.subHeading}>Sponsor</Subheading>
                    <Text style={styles.bulletedPoint}>{`\u2B24` + " "}</Text>
                    <Text style={styles.caption}>Melinda Rangel</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.row}>
                    <Subheading style={styles.subHeading}>
                        Developers
                    </Subheading>
                </View>
                <View style={styles.row}>
                    <View style={styles.bulletedRow}>
                        <Text style={styles.bulletedPoint}>
                            {`\u2B24` + " "}
                        </Text>
                        <Text style={styles.caption}>Fitri Rozi</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.bulletedRow}>
                            <Text style={styles.bulletedPoint}>
                                {`\u2B24` + " "}
                            </Text>
                            <Text style={styles.caption}>Tan Tran</Text>
                        </View>
                        <Text style={styles.bulletedPoint}>
                            {`\u2B24` + " "}
                        </Text>
                        <Text style={styles.caption}>Dan Khuu</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.bulletedRow}>
                        <Text style={styles.bulletedPoint}>
                            {`\u2B24` + " "}
                        </Text>
                        <Text style={styles.caption}>Karishma Bhakta</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.bulletedRow}>
                            <Text style={styles.bulletedPoint}>
                                {`\u2B24` + " "}
                            </Text>
                            <Text style={styles.caption}>
                                Sriram Srinivasan
                            </Text>
                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={[
                            styles.caption,
                            { textAlign: "center", width: "50%" },
                        ]}
                    >
                        Partnered with Wichita State University
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Contribution;

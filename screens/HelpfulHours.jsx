import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Main from "../components/Main";

import { db } from "../firebase/config";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";

import DropDownTab from "../components/helpful_hours/DropDownTab";

function HelpfulHours({ route }) {
    const [helpfulHoursTab, setHelpfulHoursTab] = useState([]);

    const { name } = route;
    const helpfulHoursCover = require("../assets/coverImage/helpfulHours.jpg");
    const coverImage = {
        source: helpfulHoursCover,
        darkness: "rgba(0, 0, 0, 0.12)",
        blurRadius: 0.5,
    };

    const helpfulHourshardcode = [
        {
            id: "academic office hours",
            data: {
                "open hours": [
                    {
                        days: "Monday - Friday",
                        hours: ["8:00 AM - 12:00 PM", "1:00 PM - 05:00 PM"],
                    },
                ],
                "contact information": {
                    url: "",
                    ext: "",
                    location: "Located in the LOHR",
                    email1: "emilyo@tabor.edu",
                    phone: "(620) 947-3121",
                    email2: "",
                },
                title: "Academic Office Hours",
            },
        },
        {
            id: "adrienne coffee shop",
            data: {
                "open hours": [
                    {
                        hours: ["07:00 AM - 04:30 PM"],
                        days: "Monday-Friday",
                    },
                    {
                        days: "Saturday",
                        hours: ["08:00 AM - 23:00 PM"],
                    },
                ],
                "contact information": {
                    ext: "",
                    email1: "beckyn@tabor.edu",
                    email2: "",
                    phone: "",
                    url: "",
                },
                title: "Adrienne’s Coffee Shop Hours",
                location: "Located in the FCFA",
            },
        },
        {
            id: "business office",
            data: {
                "open hours": [
                    {
                        hours: ["08:00 AM - 12:00 PM", "01:00 PM - 05:00 PM"],
                        days: "Monday - Friday",
                    },
                ],
                location: "Located in the LOHR",
                title: "Business Office Hours",
                "contact information": {
                    url: "",
                    email2: "",
                    ext: "",
                    phone: "",
                    email1: "ruthf@tabor.edu",
                },
            },
        },
        {
            id: "business studies computer lab",
            data: {
                "contact information": {
                    email1: "",
                    email2: "",
                    ext: "",
                    phone: "",
                    url: "",
                },
                location: "Located in the BUSN",
                "open hours": [
                    {
                        "hours ": ["07:00 AM - 12:00 AM"],
                        days: "All week",
                    },
                ],
                title: "Business Studies Computer Lab Hours",
            },
        },
        {
            id: "courtside grill hours",
            data: {
                "contact information": {
                    phone: "",
                    url: "",
                    email1: "robscott@tabor.edu",
                    ext: "",
                    email2: "",
                },
                location: "Located in STCR",
                "open hours": [
                    {
                        hours: ["11:00 AM - 01:00 PM"],
                        days: "Monday - Friday",
                    },
                ],
                title: "CourtSide Grill Hours",
            },
        },
        {
            id: "dining hall hours",
            data: {
                "contact information": {
                    ext: "",
                    url: "",
                    email1: "robscott@tabor.edu",
                    email2: "",
                    phone: "",
                },
                location: "Located in STCR",
                title: "Dining Hall hours",
                "open hours": [
                    {
                        days: "Monday - Friday",
                        "hours ": [
                            "07:00 AM - 9:00 AM - Breakfast",
                            "11:00 AM - 1:30 PM - Lunch",
                            "05:00 - 07:00 PM - Dinner",
                        ],
                    },
                    {
                        days: "Saturday",
                        hours: [
                            "12:00 PM - 1:00 PM - Lunch",
                            "05:00 PM - 5:45 PM - Dinner",
                        ],
                    },
                    {
                        hours: [
                            "11:30 AM - 1:00 PM - Lunch",
                            "05:00 PM - 5:45 PM - Dinner",
                        ],
                        days: "Sunday",
                    },
                ],
            },
        },
        {
            id: "financial aid office",
            data: {
                location: "Located in the Welcome Center",
                "contact information": {
                    ext: "",
                    email2: "",
                    email1: "finaid@tabor.edu",
                    phone: "",
                    url: "",
                },
                title: "Financial Aid Office Hours",
                "open hours": [
                    {
                        hours: ["08:00 AM - 12:00 PM", "01:00 PM - 05:00 PM"],
                        days: "Monday - Friday ",
                    },
                ],
            },
        },
        {
            id: "information technology office",
            data: {
                "open hours": [
                    {
                        days: "Monday - Friday",
                        hours: ["08:00 AM - 12:00 PM", "01:00 PM - 5:00 PM"],
                    },
                ],
                location: "Located in basement of the LOHR",
                "contact information": {
                    phone: "",
                    email1: "networkhelp@tabor.edu",
                    url: "",
                    ext: "",
                    email2: "",
                },
                title: "Information Technology Office Hours",
            },
        },
        {
            id: "java jays coffee shop",
            data: {
                location: "Located in the STCR",
                title: "Java Jays Coffee Shop Hours",
                "contact information": {
                    email1: "",
                    phone: "(620) 947-3121",
                    url: "",
                    ext: "ext. 1342.  ",
                    email2: "",
                },
                "open hours": [
                    {
                        days: "Sunday - Thursday",
                        hours: ["09:00 PM - 11:00 PM"],
                    },
                    {
                        hours: ["07:00 PM - 11:00 PM"],
                        days: "Game Days",
                    },
                ],
            },
        },
        {
            id: "jay shop hours",
            data: {
                "open hours": [
                    {
                        hours: ["09:00 AM - 04:00 PM"],
                        days: "Monday - Friday",
                    },
                    {
                        hours: ["Closed"],
                        days: "Saturday - Sunday",
                    },
                ],
                location: "Located in STCR",
                title: "Jay Shop Hours",
                "contact information": {
                    phone: "",
                    url: "",
                    email2: "",
                    ext: "",
                    email1: "beckyn@tabor.edu",
                },
            },
        },
        {
            id: "library computer lab hours",
            data: {
                "open hours": [
                    {
                        hours: ["7:30 AM - 11:00 PM"],
                        days: "Monday - Thursday",
                    },
                    {
                        days: "Friday",
                        hours: ["7:30 AM - 5:00 PM"],
                    },
                    {
                        hours: ["10:00 AM - 11:00 AM", "01:30 PM - 04:30 PM"],
                        days: "Friday",
                    },
                ],
                "contact information": {
                    email2: "studentlife@tabor.edu",
                    url: "",
                    phone: "(620) 947-3121",
                    email1: "deniser@tabor.edu",
                    ext: "",
                },
                title: "Library Computer Lab Hours",
                location: "Located in the LIB",
            },
        },
        {
            id: "library hours",
            data: {
                "open hours": [
                    {
                        days: "Monday - Thursday",
                        hours: ["07:30 AM - 11:00 PM"],
                    },
                    {
                        days: "Friday",
                        hours: ["07:30 AM - 05:00 PM"],
                    },
                    {
                        days: "Saturday",
                        hours: ["02:00 PM - 06:00 PM"],
                    },
                    {
                        hours: ["02:00 PM - 11:00 PM"],
                        days: "Sunday",
                    },
                ],
                title: "Library Hours - Spring 2022",
                memo: "DON'T FORGET!  TABOR LIBRARY IS OPEN FROM 2-6pm ON SATURDAYS!",
                "contact information": {
                    email3: "",
                    url: "https://taborcollege.libguides.com/library",
                    email2: "",
                    email1: "janetw@tabor.edu ",
                    phone: "620-947-3121",
                    ext: "ext. 1202 ",
                },
                image: "https://libapps.s3.amazonaws.com/accounts/118263/images/DontForget.png",
            },
        },
        {
            id: "mail room office",
            data: {
                title: "Mail Room Office Hours",
                "contact information": {
                    email1: "sherylr@tabor.edu",
                    ext: "",
                    phone: "",
                    email2: "",
                    url: "",
                },
                location: "Located in the STCR",
                "open hours": [
                    {
                        days: "Monday - Friday",
                        hours: ["08:30 AM - 12:00 PM", "01:00 PM - 05:00 PM"],
                    },
                ],
            },
        },
        {
            id: "open hours for dorms",
            data: {
                location: "Men and Women’s Quad",
                "open hours": [
                    {
                        days: "Monday - Thursday",
                        hours: ["05:00 PM - 11:00 PM"],
                    },
                    {
                        days: "Friday",
                        hours: ["05:00 PM - 12:00 AM"],
                    },
                    {
                        hours: ["01:00 PM - 12:00 AM"],
                        days: "Saturday",
                    },
                    {
                        hours: ["None"],
                        days: "Sunday",
                    },
                ],
                "contact information": {
                    url: "",
                    email1: "saras@tabor.edu",
                    ext: "",
                    phone: "",
                    email2: "michael.thompson@tabor.edu",
                    email3: "amandal@tabor.edu",
                },
                title: "Open Hours for Dorms",
            },
        },
        {
            id: "student life",
            data: {
                location: "Located in the LOHR",
                title: "Student Life Office Hours",
                "open hours": [
                    {
                        days: "Monday",
                        hours: ["08:30 AM - 12:30 PM", "01:30 PM - 03:30 PM"],
                    },
                    {
                        hours: ["08:30 AM - 12:30 PM", "01:30 PM - 04:30 PM"],
                        days: "Tuesday - Thursday",
                    },
                    {
                        days: "Friday",
                        hours: ["10:00 AM - 11:00 AM", "01:30 PM - 04:30 PM"],
                    },
                ],
                "contact information": {
                    email2: "studentlife@tabor.edu",
                    ext: "ext. 1033",
                    email1: "deniser@tabor.edu",
                    phone: "(620) 947-3121",
                    url: "",
                },
            },
        },
        {
            id: "student success office",
            data: {
                title: "Student Success Office Hours",
                "contact information": {
                    ext: "",
                    email2: "",
                    email1: "studentsuccess@tabor.edu",
                    url: "",
                    phone: "",
                },
                "open hours": [
                    {
                        hours: ["08:00 AM - 12:00 PM", "01:00 PM - 5:00 PM"],
                        days: "Monday - Friday",
                    },
                ],
                location: "Located in basement of the LOHR",
            },
        },
        {
            id: "tutoring center",
            data: {
                location: "Located in basement of the LOHR",
                "open hours": [
                    {
                        hours: [" 07:00 PM - 10:00 PM"],
                        days: "Sunday",
                    },
                    {
                        days: "Monday",
                        hours: ["07:00 PM - 10:00 PM"],
                    },
                    {
                        hours: ["01:00 PM - 03:00 PM", "07:00 PM - 10:00 PM"],
                        days: "Tuesday",
                    },
                    {
                        hours: ["07:00 PM - 10:00 PM"],
                        days: "Wednesday",
                    },
                    {
                        days: "Thursday",
                        hours: ["01:00 PM - 03:00 PM", "07:00 PM - 10:00 PM"],
                    },
                ],
                title: "Tutoring Center Hours",
                "contact information": {
                    email1: "tutoring@tabor.edu",
                    url: "https://tabor.edu/undergraduate/student-life/student-success/tutorschedule/",
                    ext: "",
                    email2: "",
                    phone: "",
                },
            },
        },
    ];

    useEffect(() => {
        // helpfulHourshardcode.forEach((helpfulHours) => {
        //     const { id, data } = helpfulHours;
        //     setDoc(doc(db, "helpful hours", id), data);
        // });
        const unsub = onSnapshot(
            collection(db, "helpful hours"),
            (querySnapshot) => {
                // querySnapshot.docs.map((document) => {
                //     // const data = document.data();
                //     console.log(document.id, document.data());
                //     // setDoc(doc(db, "helpful hours", data.id, data))
                // });
                const helpfulHours = querySnapshot.docs.map((doc) =>
                    doc.data()
                );
                // const result = querySnapshot.docs.map((doc) => ({
                //     id: doc.id,
                //     data: doc.data(),
                // }));
                // console.log(JSON.stringify(result, null, 4));
                // console.log(JSON.stringify(helpfulHours));
                setHelpfulHoursTab(helpfulHours);
            }
        );
        return unsub;
    }, []);

    return (
        <Main name={name} coverImage={coverImage}>
            <View style={styles.center}>
                <FlatList
                    backgroundColor="transparent"
                    showsVerticalScrollIndicator={false}
                    data={helpfulHoursTab}
                    listKey={(item, index) => `_key${index.toString()}`}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    renderItem={({ item: section }) => (
                        <DropDownTab section={section} />
                    )}
                />
            </View>
        </Main>
    );
}

export default HelpfulHours;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingHorizontal: 18,
        justifyContent: "center",
    },
});

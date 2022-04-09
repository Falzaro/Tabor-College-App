import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
    },
    accordion:{
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    card: {
        marginTop: 5,
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    item: {
        alignItems: 'center',
        marginTop: 5,
    },
    location: {
        textAlign: 'center',
    },
    email: {
        textAlign: 'center',
        color: '#003082',
        marginBottom: 10,
    }

});
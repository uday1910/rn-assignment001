import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    screenLayout: {
        flex: 1,
    },
    textContainer: {
        margin: 20,
    },
    text: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 22
    },
    buttonContainer: {
        flex: 1,
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 4
    }
});

export default styles;
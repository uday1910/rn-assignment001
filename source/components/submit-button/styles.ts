import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.blue,
    marginVertical: 10,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default styles;

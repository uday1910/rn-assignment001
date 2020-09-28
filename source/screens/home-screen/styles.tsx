import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
  },
  textContainer: {
    padding: 10,
    alignItems: 'flex-start',
  },
  headingText: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonStyle: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },
});

export default styles;

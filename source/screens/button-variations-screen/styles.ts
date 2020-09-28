import {StyleSheet} from 'react-native';
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
    fontSize: 22,
  },
  variationText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.green,
    fontSize: 24,
    marginBottom: 60,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  firstButtonVariant: {
    marginBottom: 20,
    borderRadius: 10,
    height: 50,
  },
  secondButtonVariant: {
    marginBottom: 20,
    borderRadius: 10,
    height: 50,
    backgroundColor: Colors.lightBlue,
  },
  thirdButtonVariant: {
    borderRadius: 10,
    height: 50,
    backgroundColor: Colors.blue,
  },
  firstButtonTextVariant: {
    textAlign: 'center',
    color: Colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondButtonTextVariant: {
    textAlign: 'center',
    color: Colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  thirdButtonTextVariant: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  shadowStyle: {
    shadowColor: Colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
});

export default styles;

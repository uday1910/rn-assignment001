import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {saveName, removeName} from '../../store/Actions/NameAction';
import {checkForDeviceOrSimulator} from '../../utility/methods';
import InputText from '../../components/input-text/inputText';
import SubmitButton from '../../components/submit-button/submitButton';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<any>;

type Props = {
  navigation: ScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = (props) => {
  const {navigation} = props;

  const [userName, setUserName] = useState<string>('');

  const checkDevice = useCallback(() => {
    checkForDeviceOrSimulator();
  }, []);

  useEffect(() => {
    checkDevice();
  }, [checkDevice]);

  const dispatch = useDispatch();

  const onChangeNameHandler = (text: string) => {
    console.log(text.trim());
    setUserName(text);
  };

  const onContinueHandler = () => {
    console.log(userName);
    if (userName.length > 0) {
      if (isValidName()) {
        dispatch(saveName(userName));
        navigation.navigate('Options');
      } else {
        dispatch(removeName());
        Alert.alert('Please enter a valid name.');
      }
    } else {
      dispatch(removeName());
      Alert.alert('Please enter your name.');
    }
  };

  const isValidName = () => {
    let nameValue = userName;
    if (nameValue.match('^[ A-Za-z]+$')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.screenLayout}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Welcome!!</Text>
      </View>
      <View style={styles.textInputContainer}>
        <InputText
          placeholder="Please Enter Your Name"
          maxLength={20}
          onChangeText={onChangeNameHandler}
        />
        <SubmitButton
          style={styles.buttonStyle}
          buttonTitle="CONTINUE"
          onPressButton={onContinueHandler}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

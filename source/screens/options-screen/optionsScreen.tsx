import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {checkForDeviceOrSimulator} from '../../utility/methods';

import SubmitButton from '../../components/submit-button/submitButton';
import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<any>;

type Props = {
  navigation: ScreenNavigationProp;
};

interface RootState {
  name: any;
  userName: string;
}

const OptionsScreen: React.FC<Props> = (props) => {
  const {navigation} = props;

  const selectUserName = (state: RootState) => state.name.userName;
  const userName = useSelector(selectUserName);

  const onButtonVariationHanlder = () => {
    navigation.navigate('Button Variations');
  };

  const onCheckRunningDevice = () => {
    checkForDeviceOrSimulator();
  };

  return (
    <View style={styles.screenLayout}>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={0}>
          Welcome, {userName}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton
          style={styles.buttonStyle}
          buttonTitle="GO TO BUTTON VARIATION"
          onPressButton={onButtonVariationHanlder}
        />
        <SubmitButton
          style={styles.buttonStyle}
          buttonTitle="CHECK RUNNING DEVICE"
          onPressButton={onCheckRunningDevice}
        />
      </View>
    </View>
  );
};

export default OptionsScreen;

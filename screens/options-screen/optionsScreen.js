import React from 'react';
import { View, Text, Alert, NativeModules } from 'react-native';
import { useSelector } from 'react-redux';

import SubmitButton from '../../components/submit-button/submitButton';
import { IS_IOS } from '../../constants/constant';
import styles from './styles';

const OptionsScreen = (props) => {
    // const { Key } = props.route.params;

    const userName = useSelector(state => state.name.userName);

    const onButtonVariationHanlder = () => {
        props.navigation.navigate('Button Variations');
    };

    const onCheckRunningDevice = () => {
        // if (IS_IOS) {
        const deviceCheck = NativeModules.CheckSimulator;
        deviceCheck.checkForDeviceOrSimulator((isDevice) => {
            console.log('Received Flag value', isDevice);
            if (isDevice === 'true') {
                Alert.alert('This application is runnng on actual device.')
            } else {
                Alert.alert('This application is runnng on simulator / emulator.')
            }
        });
        // }
    };

    return (
        <View style={styles.screenLayout}>
            <View style={styles.textContainer}>
                <Text style={styles.text} numberOfLines={0}>Welcome, {userName}</Text>
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
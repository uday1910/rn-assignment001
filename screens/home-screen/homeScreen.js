import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Alert, NativeModules } from 'react-native';
import { useDispatch } from 'react-redux';

import { saveName, removeName } from '../../store/Actions/NameAction';
import InputText from '../../components/input-text/inputText';
import SubmitButton from '../../components/submit-button/submitButton';
import { IS_IOS } from '../../constants/constant';
import styles from './styles';

const HomeScreen = (props) => {
    const [userName, setUserName] = useState('')
    const [device, setDevice] = useState(null)
    const deviceCheck = NativeModules.CheckSimulator;

    checkDevice = useCallback(() => {
        //if (IS_IOS) {
        deviceCheck.checkForDeviceOrSimulator((isDevice) => {
            console.log('Received Flag value', isDevice);
            setDevice(isDevice)
            if (isDevice === 'true') {
                Alert.alert('This application is runnng on actual device.')
            } else if (isDevice === 'false') {
                Alert.alert('This application is runnng on simulator / emulator.')
            } else {
                Alert.alert('Received value', isDevice)
            }
        });
        //}
    }, [deviceCheck]);

    useEffect(() => {
        checkDevice();
    }, [checkDevice]);

    const dispatch = useDispatch();

    const onChangeNameHandler = (text) => {
        console.log(text.trim());
        setUserName(text)
    };

    const onContinueHandler = () => {
        console.log(userName)
        if (userName.length > 0) {
            if (isValidName()) {
                dispatch(saveName(userName));
                props.navigation.navigate('Options');
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
        if (nameValue.match("^[ A-Za-z]+$")) {
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
                    placeholder='Please Enter Your Name'
                    maxLength={20}
                    returnKeyLabel='Done'
                    returnKeyType='done'
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
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import SwipeButton from 'rn-swipe-unlock-button';

import Colors from '../../constants/colors';
import VariationButton from '../../components/variation-button/variationButton';
import styles from './styles';

interface RootState {
    name: any;
    userName: string;
}

const ButtonVariationsScreen: React.FC<{}> = () => {
    
    const selectUserName = (state: RootState) => state.name.userName;
    const userName = useSelector(selectUserName);
    
    const [slideButtonMessage, setSlideButtonMessage] = useState('SLIDE TO CONTINUE.');

    const onFirstVariantHanlder = () => {
        setTimeout(function () {
            //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
            Alert.alert("Alert Shows After 0.5 Seconds of Delay.");
        }, 500);
    };

    const onSecondVariantHanlder = () => {
        Alert.alert('Second variant tapped.');
    };

    const onThirdVariantHanlder = () => {
        Alert.alert('Third variant tapped.');
    };

    return (
        <View style={styles.screenLayout}>
            <View style={styles.textContainer}>
                <Text style={styles.text} numberOfLines={0}>Welcome, {userName}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.variationText}>4 variations of a Button</Text>
                <VariationButton
                    addRippleEffect={true}
                    onPressButton={onFirstVariantHanlder}
                    buttonTextStyle={styles.firstButtonTextVariant}
                    buttonTitle='PRESS ME'
                    buttonStyle={{ ...styles.firstButtonVariant, ...styles.shadowStyle }} />
                <VariationButton
                    activeOpacity={0.6}
                    onPressButton={onSecondVariantHanlder}
                    buttonTextStyle={styles.secondButtonTextVariant}
                    buttonTitle='PRESS ME'
                    buttonStyle={{ ...styles.secondButtonVariant, ...styles.shadowStyle }} />
                <VariationButton
                    activeOpacity={0.4}
                    onPressButton={onThirdVariantHanlder}
                    buttonTextStyle={styles.thirdButtonTextVariant}
                    buttonTitle='PRESS ME'
                    buttonStyle={{ ...styles.thirdButtonVariant, ...styles.shadowStyle }} />
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 16,
                marginBottom: 40
            }}>
                <SwipeButton
                    height={50}
                    width='84%'
                    title={slideButtonMessage}
                    titleFontSize={20}
                    titleColor={Colors.white}
                    thumbIconBackgroundColor={Colors.lightBlue}
                    thumbIconBorderColor={Colors.transparent}
                    railBorderColor={Colors.gray}
                    railBackgroundColor={Colors.black}
                    railFillBackgroundColor={Colors.lightBlue}
                    railStyles={{
                        backgroundColor: Colors.extraLightBlue,
                        borderColor: Colors.transparent,
                    }}
                    onSwipeStart={() => setSlideButtonMessage('SLIDE STARTED')}
                    onSwipeFail={() => setSlideButtonMessage('SLIDE TO CONTINUE')}
                    onSwipeSuccess={() => setSlideButtonMessage('DONE')}
                />
            </View>
        </View >
    );
};

export default ButtonVariationsScreen;
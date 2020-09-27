import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { IS_ANDROID, IS_IOS } from '../../constants/constant';
import styles from './styles';


export interface Props {
    addRippleEffect?: boolean;
    buttonStyle: object;
    activeOpacity?: number;
    buttonTextStyle: object;
    buttonTitle: string;
    onPressButton: () => void;
}

const VariationButton: React.FC<Props> = (props) => {
    let TouchableButton: any = TouchableOpacity;

    if (props.addRippleEffect && IS_IOS) {
        TouchableButton = Ripple
    }

    if (props.addRippleEffect && IS_ANDROID) {
        TouchableButton = TouchableNativeFeedback
    }

    return (
        <TouchableButton 
        onPress={props.onPressButton} 
        style={{ ...props.buttonStyle, ...styles.defaultContainer }}
        activeOpacity={props.activeOpacity}>
            <View style={{ alignItems: "center", justifyContent: 'center', flex: 1 }}>
                <Text style={props.buttonTextStyle}>{props.buttonTitle}</Text>
            </View>
        </TouchableButton>
    );
};

export default VariationButton;
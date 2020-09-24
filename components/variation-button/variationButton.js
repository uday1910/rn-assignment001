import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import PropTypes from 'prop-types';

import { IS_ANDROID, IS_IOS } from '../../constants/constant';
import styles from './styles';

const VariationButton = (props) => {
    let TouchableButton = TouchableOpacity;

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

VariationButton.propTypes = {
    onPressButton: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
    activeOpacity: PropTypes.number,
    buttonTextStyle: PropTypes.object,
    buttonTitle: PropTypes.string
}

export default VariationButton;
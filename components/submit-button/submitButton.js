import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SubmitButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressButton} style={{ width: '85%' }}>
            <View style={[props.style, styles.buttonContainer]}>
                <Text style={styles.buttonTextStyle}>{props.buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

SubmitButton.propTypes = {
    onPressButton: PropTypes.func.isRequired,
    style: PropTypes.object,
    buttonTitle: PropTypes.string,
}

export default SubmitButton;

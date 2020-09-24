import React, { useState } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../constants/colors';
import styles from './styles';

const InputText = (props) => {
    const [enteredValue, setEnteredValue] = useState('');

    const inputHandler = enteredText => {
        setEnteredValue(enteredText);
        props.onChangeText(enteredText)
    };

    return (
        <TextInput
            value={enteredValue}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.white}
            style={{ ...styles.input, ...props.style }}
            placeholderTextColor={Colors.gray}
            maxLength={props.maxLength}
            autoCorrect={false}
            returnKeyLabel={props.returnKeyLabel}
            returnKeyType={props.returnKeyType}
            onChangeText={inputHandler}
        />
    );
};

InputText.propTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.object,
    maxLength: PropTypes.number,
    returnKeyLabel: PropTypes.string,
    returnKeyType: PropTypes.string,
    onChangeText: PropTypes.func.isRequired
}

export default InputText;

import React, {useState} from 'react';
import {TextInput} from 'react-native';

import Colors from '../../constants/colors';
import styles from './styles';

export interface Props {
  placeholder: string;
  style?: object;
  maxLength: number;
  onChangeText: (text: string) => void;
}

const InputText: React.FC<Props> = (props) => {
  const [enteredValue, setEnteredValue] = useState<string>('');

  const inputHandler = (enteredText: string) => {
    setEnteredValue(enteredText);
    props.onChangeText(enteredText);
  };

  return (
    <TextInput
      value={enteredValue}
      placeholder={props.placeholder}
      style={{...styles.input, ...props.style}}
      placeholderTextColor={Colors.gray}
      maxLength={props.maxLength}
      autoCorrect={false}
      onChangeText={inputHandler}
    />
  );
};

export default InputText;

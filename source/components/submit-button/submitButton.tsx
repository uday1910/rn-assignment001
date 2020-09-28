import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

export interface Props {
  buttonTitle: string;
  style: object;
  onPressButton: () => void;
}

const SubmitButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressButton} style={{width: '85%'}}>
      <View style={[props.style, styles.buttonContainer]}>
        <Text style={styles.buttonTextStyle}>{props.buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubmitButton;

import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import InputText from '../../../source/components/input-text/inputText';

const inputStyle = {
  color: 'white',
  padding: 20,
};

const mockTextChangeEvent = jest.fn();

const props = {
  placeholder: 'Enter the value',
  style: inputStyle,
  maxLength: 20,
  onChangeText: mockTextChangeEvent,
};

describe('InputText Function', () => {
  it('InputText render properly according to the snapshot', () => {
    const inputText = renderer.create(<InputText {...props} />).toJSON();
    expect(inputText).toMatchSnapshot();
  });

  it('On change text event called while typing', () => {
    const {getByPlaceholderText} = render(<InputText {...props} />);
    const textInputObj = getByPlaceholderText('Enter the value');
    fireEvent(textInputObj, 'onChangeText');
    expect(mockTextChangeEvent).toHaveBeenCalled();
  });

  it('Trigger text change event in Text input', () => {
    const {getByTestId} = render(<InputText {...props} />);
    const textInput = getByTestId('input-text');
    expect(textInput).toBeTruthy();
    fireEvent.changeText(textInput, 'uday');
  });
});

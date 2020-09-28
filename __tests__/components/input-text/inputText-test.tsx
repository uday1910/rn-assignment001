import React from 'react';
import renderer from 'react-test-renderer';

import InputText from '../../../source/components/input-text/inputText';

const inputStyle = {
  color: 'white',
  padding: 20,
};

const props = {
  placeholder: 'Enter the value',
  style: inputStyle,
  maxLength: 20,
  onChangeText: jest.fn(),
};

describe('InputText Function', () => {
  it('InputText render properly according to the snapshot', () => {
    const inputText = renderer.create(<InputText {...props} />).toJSON();
    expect(inputText).toMatchSnapshot();
  });
});

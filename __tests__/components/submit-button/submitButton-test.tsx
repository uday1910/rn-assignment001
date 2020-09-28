import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import SubmitButton from '../../../source/components/submit-button/submitButton';

const mockPressEvent = jest.fn();

const containerStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

const props = {
  onPressButton: mockPressEvent,
  style: containerStyle,
  buttonTitle: 'Button',
};

describe('SubmitButton Function', () => {
  it('SubmitButton render properly according to the snapshot', () => {
    const button = renderer.create(<SubmitButton {...props} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('should have a button', async () => {
    const {getByTestId} = render(<SubmitButton {...props} />);
    const button = await getByTestId('submit-button');
    expect(button).toBeDefined();
  });

  it('able to press button', () => {
    const {getByTestId} = render(<SubmitButton {...props} />);
    fireEvent.press(getByTestId('submit-button'));
    expect(mockPressEvent).toBeCalled();
  });
});

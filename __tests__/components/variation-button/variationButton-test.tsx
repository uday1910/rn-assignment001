import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

import VariationButton from '../../../source/components/variation-button/variationButton';
import {IS_IOS} from '../../../source/constants/constant';

const mockPressEvent = jest.fn();

const buttonStyle = {
  borderRadius: 10,
  backgroundColor: 'blue',
};

const buttonTextStyle = {
  color: 'white',
  padding: 10,
};

const props = {
  onPressButton: mockPressEvent,
  buttonStyle: buttonStyle,
  activeOpacity: 0.5,
  buttonTextStyle: buttonTextStyle,
  buttonTitle: 'Button',
  addRippleEffect: IS_IOS ? true : false,
};

describe('VariationButton Function', () => {
  it('VariationButton render properly according to the snapshot', () => {
    const button = renderer.create(<VariationButton {...props} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('should have a button', async () => {
    const {getByTestId} = render(<VariationButton {...props} />);
    const button = await getByTestId('variation-button');
    expect(button).toBeDefined();
  });
});

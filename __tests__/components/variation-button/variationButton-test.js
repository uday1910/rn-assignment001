import React from 'react';
import renderer from 'react-test-renderer';

import VariationButton from '../../../components/variation-button/variationButton';

const buttonStyle = {
    borderRadius: 10,
    backgroundColor: 'blue',
};

const buttonTextStyle = {
    color: 'white',
    padding: 10
};

const props = {
    onPressButton: jest.fn(),
    buttonStyle: buttonStyle,
    activeOpacity: 0.5,
    buttonTextStyle: buttonTextStyle,
    buttonTitle: 'Button'
};

describe('VariationButton Function', () => {
    it('VariationButton render properly according to the snapshot', () => {
        const button = renderer.create(<VariationButton {...props} />).toJSON();
        expect(button).toMatchSnapshot();
    });
});
import React from 'react';
import renderer from 'react-test-renderer';

import SubmitButton from '../../../components/submit-button/submitButton';

const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center'
};

const props = {
    onPressButton: jest.fn(),
    style: containerStyle,
    buttonTitle: 'Button',
}

describe('SubmitButton Function', () => {
    it('SubmitButton render properly according to the snapshot', () => {
        const button = renderer.create(<SubmitButton {...props} />).toJSON();
        expect(button).toMatchSnapshot();
    });
});
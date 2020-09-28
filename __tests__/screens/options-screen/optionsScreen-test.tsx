import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import configureStore from '../../../source/store/store';
import OptionsScreen from '../../../source/screens/options-screen/optionsScreen';

describe('AddTodo component test', () => {
  it('InputText render properly according to the snapshot', () => {
    const screen = renderer
      .create(
        <Provider store={configureStore}>
          <OptionsScreen />
        </Provider>,
      )
      .toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('displays the passed-in name', () => {
    const {getByTestId} = render(
      <Provider store={configureStore}>
        <OptionsScreen />
      </Provider>,
    );
    expect(getByTestId('welcome-text')).not.toBeNull();
  });
});

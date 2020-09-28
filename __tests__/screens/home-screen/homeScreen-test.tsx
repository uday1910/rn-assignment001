import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import configureStore from '../../../source/store/store';
import HomeScreen from '../../../source/screens/home-screen/homeScreen';

jest.useFakeTimers();

describe('AddTodo component test', () => {
  it('InputText render properly according to the snapshot', () => {
    const screen = renderer
      .create(
        <Provider store={configureStore}>
          <HomeScreen />
        </Provider>,
      )
      .toJSON();
    expect(screen).toMatchSnapshot();
  });
});

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import nameReducers from './store/Reducers/NameReducer';

import MainNavigation from './navigation/MainNavigation';

const rootReducer = combineReducers({
  name: nameReducers
});

const store = createStore(rootReducer);

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

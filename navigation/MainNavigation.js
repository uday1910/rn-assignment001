import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home-screen/homeScreen';
import OptionsScreen from '../screens/options-screen/optionsScreen';
import ButtonVariationsScreen from '../screens/button-variations-screen/buttonVariationsScreen';

import Colors from '../constants/colors';

const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.blue,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    headerBackTitle: ''
}

const Stack = createStackNavigator();

const MainNavigation = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={defaultStackNavigationOptions}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="Options"
                component={OptionsScreen}
                options={{
                    title: 'Dashboard',
                }}
                // initialParams={{ some Key Value Pair }}
            />
            <Stack.Screen
                name="Button Variations"
                component={ButtonVariationsScreen}
                options={{ title: 'Button Variations' }}
            />
        </Stack.Navigator>
    );
}

export default MainNavigation;
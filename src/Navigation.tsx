import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {Login} from './Authenticate/Login';
import {SignUp} from './Authenticate/SignUp';

const TabNavigator = createMaterialTopTabNavigator({
    Login: Login,
    Signup: SignUp
});

export default createAppContainer(TabNavigator);

import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Authenticate from './Screens/Authenticate';

const AppDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: Authenticate
    }
}, {
    initialRouteName: 'Login',
    drawerWidth: 300
});

export default createAppContainer(AppDrawerNavigator);

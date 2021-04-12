import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';

const AppStack = createStackNavigator();

const AuthNav = () => (
    <AppStack.Navigator>
        <AppStack.Screen name = "Welcome" component = {WelcomeScreen} options = {{headerShown:false}}/>
        <AppStack.Screen name = "Login" component = {LoginScreen} options = {{headerShown:false}}/>
        <AppStack.Screen name = "Register" component = {RegisterScreen} options = {{headerShown:false}}/>
        <AppStack.Screen name = "Account" component = {AccountScreen} options = {{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNav;
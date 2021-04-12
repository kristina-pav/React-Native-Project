import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthNav from './app/navigation/AuthNav';

export default function App() {
  return (
    <NavigationContainer> 
      <AuthNav/> 
    </NavigationContainer>
  );
}


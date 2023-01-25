import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainDrawerNavigation from './src/screens/MainDrawerNavigation/MainDrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainDrawerNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

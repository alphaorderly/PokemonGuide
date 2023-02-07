import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainDrawerNavigation from './src/screens/MainDrawerNavigation/MainDrawerNavigation';
import { RecoilRoot } from 'recoil';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
      <RecoilRoot>
        <NavigationContainer>
          <SafeAreaProvider>
            <MainDrawerNavigation />
          </SafeAreaProvider>
        </NavigationContainer>
      </RecoilRoot>
  );
};

export default App;

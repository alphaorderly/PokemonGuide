import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ScrPokemonListMain from './ScrPokemonListMain';
import ScrPokemonListSetting from './ScrPokemonListSetting';
import ScrPokemonListWebView from './ScrPokemonListWebView';

const Stack = createStackNavigator();

const PokemonListStackNavigation = () => {

  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={ScrPokemonListMain} />
      <Stack.Screen name="Setting" component={ScrPokemonListSetting} options={{ presentation: 'transparentModal'}} />
      <Stack.Screen name="WebView" component={ScrPokemonListWebView} options={{ presentation: 'transparentModal'}} />
    </Stack.Navigator>
  );
};

export default PokemonListStackNavigation;

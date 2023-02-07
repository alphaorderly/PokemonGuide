
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ScrGuidanceMainWebView from './ScrGuidanceMainWebView';

const Stack = createStackNavigator();

const GuidanceStackNavigation = () => {


  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={ScrGuidanceMainWebView}/>
    </Stack.Navigator>
  );
};

export default GuidanceStackNavigation;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScrCounterListMain from './CounterList/ScrCounterListMain';

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CounterList"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="CounterList"
        component={ScrCounterListMain}
        options={{title: '상성 리스트'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;

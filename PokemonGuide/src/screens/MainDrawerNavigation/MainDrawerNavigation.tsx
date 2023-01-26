import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScrCounterListMain from './CounterList/ScrCounterListMain';
import CustomDrawer from '../../components/MainDrawerNavigation/Drawer';

import Styles from '../../styles/MainDrawerNavigation/MainDrawerNavigationStyle';

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CounterList"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType:'back',
        headerShown: false,
        drawerActiveBackgroundColor: '#D6CCC2',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#EDEDE9',
        drawerStyle: Styles.DrawerStyle,
        drawerLabelStyle: Styles.DrawerLabelStyle,
        drawerContentContainerStyle: Styles.DrawerContentContainerStyle,
      }}>
      <Drawer.Screen
        name="CounterList"
        component={ScrCounterListMain}
        options={{title: '상성 리스트'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;

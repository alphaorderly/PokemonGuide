import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScrCounterListMain from './CounterList/ScrCounterListMain';
import CustomDrawer from '../../components/MainDrawerNavigation/Drawer';

import Styles from '../../styles/MainDrawerNavigation/MainDrawerNavigationStyle';
import PokemonListStackNavigation from './PokemonList/PokemonListStackNavigation';
import OpponentTrainerStackNavigation from './OpponentTrainer/OpponentTrainerStackNavigation';
import GuidanceStackNavigation from './Guidance/GuidanceStackNavigation';

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
        swipeEnabled: false,
      }}>
      <Drawer.Screen
        name="CounterList"
        component={ScrCounterListMain}
        options={{title: '상성 리스트'}}
      />
      <Drawer.Screen
        name="PokemonList"
        component={PokemonListStackNavigation}
        options={{title: '도감 리스트', }}
      />
      <Drawer.Screen
        name="OpponentTrainer"
        component={OpponentTrainerStackNavigation}
        options={{title: '주요 상대'}}
      />
      <Drawer.Screen
        name="Guidance"
        component={GuidanceStackNavigation}
        options={{title: '공략'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;

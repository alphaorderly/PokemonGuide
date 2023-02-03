
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ScrOpponentTrainerMain from './ScrOpponentTrainerMain';
import ScrOpponentTrainerList from './ScrOpponentTrainerList';
import ScrOpponentTrainerDetail from './ScrOpponentTrainerDetail';
import ScrOpponentTrainerPokemonDetail from './ScrOpponentTrainerPokemonDetail';
import ScrOpponentTrainerPokemonSkillWebview from './ScrOpponentTrainerPokemonSkillWebview';


const Stack = createStackNavigator();

const OpponentTrainerStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={ScrOpponentTrainerMain} />
      <Stack.Screen name="List" component={ScrOpponentTrainerList} />
      <Stack.Screen name="Detail" component={ScrOpponentTrainerDetail} />
      <Stack.Screen name="PokemonDetail" component={ScrOpponentTrainerPokemonDetail} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="PokemonSkillWebview" component={ScrOpponentTrainerPokemonSkillWebview} options={{ presentation: 'transparentModal' }} />
    </Stack.Navigator>
  );
};

export default OpponentTrainerStackNavigation;

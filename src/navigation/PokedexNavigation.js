import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from '../screen/Pokedex';
import PokemonScreen from '../screen/PokemonScreen';

const Stack = createStackNavigator();

export default function FavorteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen}/>
      <Stack.Screen name="Pokemon" component={PokemonScreen}/>
    </Stack.Navigator>
  )
}
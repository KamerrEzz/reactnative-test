import { Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/Home.screen";
import StatusScrenn from "../screen/StatusScreen";
import PokedexScreen from "../screen/Pokedex";
import PokedexNavigation from "./PokedexNavigation";

const Stack = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator defaultScreenOptions={PokedexNavigation}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Stack.Screen name="Status" component={StatusScrenn} />
    </Stack.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 50, height: 50, top: -15 }}
    />
  );
}

import { Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/PokemonList";
import { getPokemonsApi, getPokemonDetailsApi } from "../utils/api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsR = response.results;
      const pokemonsDetails = [];
      for (let i = 0; i < pokemonsR.length; i++) {
        const pokemon = await getPokemonDetailsApi(pokemonsR[i].url);
        pokemonsDetails.push({
          id: pokemon.id,
          name: pokemon.name,
          type: pokemon.types[0].type.name,
          order: pokemon.order,
          image: pokemon.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemonsDetails, ...pokemons]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

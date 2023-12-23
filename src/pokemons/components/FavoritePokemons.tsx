'use client';
import { PokemonGrid } from '@/pokemons';
import { useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
  const pokemonsFavorites = useAppSelector((state) => state.pokemonsFavorites.favorites);
  const [pokemons, setPokemons] = useState(Object.values(pokemonsFavorites));

  useEffect(() => {
    setPokemons(Object.values(pokemonsFavorites));
  }, [pokemonsFavorites]);

  return <>{pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : <NoFavoritePokemons />}</>;
};

export const NoFavoritePokemons = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <IoHeartOutline size={64} className="text-red-500" />
      <span className="text-3xl font-bold text-center text-gray-800 mb-10">No hay favoritos</span>
    </div>
  );
};

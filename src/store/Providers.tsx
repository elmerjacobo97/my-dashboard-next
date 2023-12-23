'use client';
import { Provider } from 'react-redux';
import { store } from './index';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemons/pokemonsFavoritesSlice';

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('pokemonsFavorites') ?? '{}');
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

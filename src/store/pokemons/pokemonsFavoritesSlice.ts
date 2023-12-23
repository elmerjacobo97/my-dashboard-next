import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface IPokemonsFavorites {
  favorites: { [key: string]: SimplePokemon };
}

const getInitialState = () => {
  if (typeof localStorage === 'undefined') return {};
  const pokemonsFavorites = JSON.parse(localStorage.getItem('pokemonsFavorites') ?? '{}');
  return pokemonsFavorites;
};

const initialState: IPokemonsFavorites = {
  // ...getInitialState(),
  favorites: {},
  // '1': { id: '1', name: 'bulbasaur' },
  // '2': { id: '2', name: 'ivysaur' },
  // '3': { id: '3', name: 'venusaur' },
};

const pokemonsFavoritesSlice = createSlice({
  name: 'pokemonsFavorites',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // !no se debe de hacer en redux
      localStorage.setItem('pokemonsFavorites', JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsFavoritesSlice.actions;

export default pokemonsFavoritesSlice.reducer;

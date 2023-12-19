import { Metadata } from 'next';
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

export const metadata: Metadata = {
  title: 'Listado de pokemons favoritos',
  description: 'Listado de pokemons',
}

export default async function PokemonsPage() {

  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Listado de Favoritos <span className="text-sm text-gray-600 font-normal">global state</span>
      </h1>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}

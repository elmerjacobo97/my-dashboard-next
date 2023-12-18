import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';
import { PokemonsResponse } from '../../pokemons/interfaces/pokemon-response';
import { PokemonGrid } from '../../pokemons';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2),
    name: pokemon.name,
  }));
  // throw new Error('Error inesperado. Internal server error');
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151, 0);

  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Listado de Pokemons <span className="text-sm text-gray-600 font-normal">estático</span>
      </h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

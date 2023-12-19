import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Pokemon, PokemonsResponse } from '@/pokemons';

interface Props {
  params: {
    name: string;
  };
}

// Esto se ejecuta en build time (npm run build), osea construye los 151 pokemons de manera estática.
export async function generateStaticParams() {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res) => res.json());
   const static151Pokemons =  data.results.map((pokemon) => ({
    name: pokemon.name,
  }));
  return static151Pokemons.map(({ name}) => ({ name: name }));
}

// Metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.name);
    return {
      title: `Pokemon - ${pokemon.name}`,
      description: `Información detallada de ${pokemon.name}`,
    };
  } catch (error) {
    return {
      title: 'Página del pokemon',
      description: 'Deserunt labore eiusmod eu reprehenderit.',
    };
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      // cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 24, // 1 day
      },
    }).then((res) => res.json());
    // console.log('data', pokemon);
    return pokemon;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.name);
  return (
    <div className="bg-gray-100 p-5">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} className="object-cover" />
          </div>
          <div className="p-8">
            <h2 className="block text-2xl font-bold text-gray-800 capitalize mb-2">{pokemon.name}</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Abilities</h3>
              <ul className="list-disc ml-5 text-gray-600">
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center space-x-4">
              <span className="text-gray-700">Height: {pokemon.height}</span>
              <span className="text-gray-700">Weight: {pokemon.weight}</span>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Stats</h3>
          <div className="flex flex-wrap -mx-2">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="w-1/2 p-2">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium">{stat.stat.name}:</span>
                  <span className="ml-auto text-gray-600">{stat.base_stat}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 rounded-full h-2" style={{ width: `${stat.base_stat}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Types</h3>
          <div className="flex space-x-2">
            {pokemon.types.map((type) => (
              <span key={type.type.name} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

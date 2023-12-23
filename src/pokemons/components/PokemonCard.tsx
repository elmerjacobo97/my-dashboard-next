'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoHeart, IoHeartOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { SimplePokemon } from '@/pokemons';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemonsFavoritesSlice';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => !!state.pokemonsFavorites.favorites[pokemon.id]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        {/* priority={false} cargarlo bajo demanda. */}
        <div className="p-2">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            width={200}
            height={200}
            layout="responsive"
            priority={false}
          />
        </div>
        <button type="button" className="absolute top-2 right-2" onClick={() => dispatch(toggleFavorite(pokemon))}>
          {isFavorite ? <IoHeart size={24} className="text-red-500" /> : <IoHeartOutline size={24} className="text-red-500" />}
        </button>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold capitalize mb-1">{pokemon.name}</h2>
          <span className="text-sm text-gray-600">ID: {pokemon.id}</span>
        </div>
        <Link href={`/dashboard/pokemons/${pokemon.name}`} className="text-blue-500 hover:text-blue-600 flex items-center justify-center mt-2">
          <IoInformationCircleOutline size={20} className="mr-1" />
          Más info
        </Link>
      </div>
    </div>
  );
};

import type { NamedAPIResource, Pokemon } from '../types/pokemon';
import getPokemonId from '../utils/getPokemonId';
import PokemonFaceCard from './PokemonFaceCard';
import PokemonListSkeleton from './PokemonListSkeleton';

type Props = {
    pokemonList: NamedAPIResource[];
    isLoading: boolean;
    pokemonData?: Pokemon;
    query: boolean;
    openModal: (name: string) => void;
};

export default function PokemonList({ pokemonList, pokemonData, query, isLoading, openModal }: Props) {
    if (isLoading) return <PokemonListSkeleton />;

    return (
        <div className='flex flex-wrap justify-center gap-3'>
            {pokemonData && query ? (
                <PokemonFaceCard id={pokemonData.id} name={pokemonData.name} openModal={openModal} />
            ) : (
                pokemonList.map((pokemon) => (
                    <PokemonFaceCard key={pokemon.name} id={getPokemonId(pokemon.url)} name={pokemon.name} openModal={openModal} />
                ))
            )}
        </div>
    );
}

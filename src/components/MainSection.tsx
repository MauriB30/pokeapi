import { memo } from 'react';
import type { NamedAPIResource, Pokemon } from '../types/pokemon';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonModal/PokemonCard';

type Props = {
    pokemonList: NamedAPIResource[];
    pokemonData?: Pokemon;
    query: boolean;
    isLoading: boolean;
    openModal: (name: string) => void;
    closeModal: () => void;
    isModalOpen: boolean;
};

function MainSection({ pokemonList, pokemonData, query, isLoading, isModalOpen, openModal, closeModal }: Props) {
    console.log('render mainSection');
    return (
        <section className='flex justify-center'>
            {isModalOpen && pokemonData && <PokemonCard pokemon={pokemonData} closeModal={closeModal} />}
            <PokemonList pokemonList={pokemonList} pokemonData={pokemonData} query={query} isLoading={isLoading} openModal={openModal} />
        </section>
    );
}

export default memo(MainSection);

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import usePaginatedPokemon from '../hooks/usePaginatedPokemon';
import { getPokemon, getPokemonsList } from '../services/PokemonService';
import type { NamedAPIResourceList, Pokemon } from '../types/pokemon';
import MainSection from './MainSection';
import PaginationSection from './PaginationSection';
import SearchSection from './SearchSection';

const pokemonsPerPage = 100;

export default function Main() {
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const { page, offset, handlePageChange } = usePaginatedPokemon(pokemonsPerPage);

    const {
        data: pokemonListData,
        isLoading,
        error,
    } = useQuery<NamedAPIResourceList>({
        queryKey: ['pokemonList', pokemonsPerPage, offset],
        queryFn: () => getPokemonsList(pokemonsPerPage, offset),
        staleTime: 1000 * 60 * 5,
        placeholderData: (previousData) => previousData,
        enabled: !query,
    });

    const { data: pokemonData, error: pokemonError } = useQuery<Pokemon>({
        queryKey: ['pokemon', selectedPokemon || query],
        queryFn: () => getPokemon(selectedPokemon || query),
        enabled: !!query || !!isModalOpen,
        retry: false,
    });

    function handleOpenModal(name: string) {
        setSelectedPokemon(name);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
        setSelectedPokemon('');
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <main className='flex-1 space-y-10 p-10'>
            <SearchSection setQuery={setQuery} searchError={pokemonError} />
            <MainSection
                pokemonList={pokemonListData?.results || []}
                pokemonData={pokemonData}
                query={!!query}
                isLoading={isLoading}
                isModalOpen={isModalOpen}
                openModal={handleOpenModal}
                closeModal={handleCloseModal}
            />
            <PaginationSection numberPages={Math.ceil((pokemonListData?.count ?? 0) / pokemonsPerPage)} page={page} onChangePage={handlePageChange} />
        </main>
    );
}

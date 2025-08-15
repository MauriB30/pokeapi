import { useState } from 'react';

export default function usePaginatedPokemon(itemsPerPage: number) {
    const [page, setPage] = useState(1);
    const offset = (page - 1) * itemsPerPage;

    function handlePageChange(_e: React.ChangeEvent<unknown>, value: number) {
        setPage(value);
    }

    return { page, offset, handlePageChange };
}

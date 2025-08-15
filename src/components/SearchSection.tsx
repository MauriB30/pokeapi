import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

type Props = {
    setQuery: (value: string) => void;
    searchError: Error | null;
};

export default function SearchSection({ setQuery, searchError }: Props) {
    console.log(searchError?.message);
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value);

    useEffect(() => {
        setQuery(debouncedValue);
    }, [debouncedValue, setQuery]);

    return (
        <section className='mx-auto max-w-md space-y-1 rounded-md bg-white p-3'>
            <h3 className='text-center font-medium'>Buscar Pokémon</h3>
            <div className='space-y-3'>
                <div className='flex gap-3 text-center'>
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        type='search'
                        name='pokemon-search'
                        placeholder='Nombre o ID del pokémon...'
                        className='flex-1 rounded-md border p-1'
                        autoComplete='off'
                    />
                    <button className='rounded-md border bg-black p-1 text-white'>
                        <Search />
                    </button>
                </div>

                <p className='text-center text-red-500'>{searchError?.message} </p>
            </div>
        </section>
    );
}

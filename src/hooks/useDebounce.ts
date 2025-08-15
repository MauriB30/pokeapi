import { useEffect, useState } from 'react';

export default function useDebounce(query: string) {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedValue(query);
        }, 1000);

        return () => {
            clearTimeout(timeId);
        };
    }, [query]);

    return debouncedValue;
}

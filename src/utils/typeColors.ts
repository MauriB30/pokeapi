const typeColors: Record<
    string,
    {
        backgroundColor: string;
        textColor: string;
        muiColor: { main: string; alt: string };
    }
> = {
    normal: { backgroundColor: 'bg-gray-400', textColor: 'text-gray-400', muiColor: { main: '#8b95a2', alt: '#d1d5db' } },
    fire: { backgroundColor: 'bg-orange-300', textColor: 'text-orange-500', muiColor: { main: '#e09d60', alt: '#fed7aa' } },
    water: { backgroundColor: 'bg-blue-400', textColor: 'text-blue-400', muiColor: { main: '#5390f1', alt: '#93c5fd' } },
    electric: { backgroundColor: 'bg-yellow-400', textColor: 'text-yellow-400', muiColor: { main: '#e0b50f', alt: '#fde047' } },
    grass: { backgroundColor: 'bg-green-400', textColor: 'text-green-500', muiColor: { main: '#3fb06b', alt: '#86efac' } },
    ice: { backgroundColor: 'bg-cyan-300', textColor: 'text-cyan-300', muiColor: { main: '#56cde0', alt: '#a5f3fc' } },
    fighting: { backgroundColor: 'bg-amber-500', textColor: 'text-amber-500', muiColor: { main: '#d48908', alt: '#fbbf24' } },
    poison: { backgroundColor: 'bg-purple-400', textColor: 'text-purple-600', muiColor: { main: '#926de0', alt: '#c4b5fd' } },
    ground: { backgroundColor: 'bg-yellow-600', textColor: 'text-yellow-600', muiColor: { main: '#b67903', alt: '#facc15' } },
    flying: { backgroundColor: 'bg-indigo-300', textColor: 'text-indigo-300', muiColor: { main: '#8ea1f8', alt: '#c7d2fe' } },
    psychic: { backgroundColor: 'bg-pink-500', textColor: 'text-pink-500', muiColor: { main: '#d63988', alt: '#f472b6' } },
    bug: { backgroundColor: 'bg-green-600', textColor: 'text-green-700', muiColor: { main: '#12823c', alt: '#4ade80' } },
    rock: { backgroundColor: 'bg-yellow-800', textColor: 'text-yellow-800', muiColor: { main: '#703f0c', alt: '#fbbf24' } },
    ghost: { backgroundColor: 'bg-indigo-800', textColor: 'text-indigo-800', muiColor: { main: '#2f2991', alt: '#6366f1' } },
    dragon: { backgroundColor: 'bg-purple-700', textColor: 'text-purple-700', muiColor: { main: '#5a1a8e', alt: '#a855f7' } },
    dark: { backgroundColor: 'bg-gray-800', textColor: 'text-gray-800', muiColor: { main: '#171f30', alt: '#6b7280' } },
    steel: { backgroundColor: 'bg-gray-500', textColor: 'text-gray-500', muiColor: { main: '#5c626e', alt: '#9ca3af' } },
    fairy: { backgroundColor: 'bg-pink-300', textColor: 'text-pink-300', muiColor: { main: '#e288c5', alt: '#fbcfe8' } },
};

export function getPokemonColor(type: string) {
    return typeColors[type];
}

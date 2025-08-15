export default function PokemonListSkeleton() {
    return (
        <div className='flex flex-wrap justify-center gap-3'>
            {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className='size-20 animate-pulse rounded-md bg-gray-300' />
            ))}
        </div>
    );
}

type Props = {
    name: string;
    image: string;
};

const defaultSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

export default function PokemonCardImage({ name, image }: Props) {
    return (
        <div className='flex h-full justify-center py-5'>
            <img
                className='h-32 w-32 object-contain'
                src={image}
                title={name}
                alt={name}
                onError={(e) => {
                    console.error('Error al cargar la imagen:', e);
                    e.currentTarget.src = defaultSprite;
                }}
            />
        </div>
    );
}

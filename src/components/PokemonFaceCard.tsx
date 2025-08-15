type Props = {
    name: string;
    id: number;
    openModal: (name: string) => void;
};

const defaultSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';

export default function PokemonFaceCard({ id, name, openModal }: Props) {
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className='size-20 cursor-pointer rounded-md bg-black/10' onClick={() => openModal(name)}>
            <img
                src={spriteUrl}
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

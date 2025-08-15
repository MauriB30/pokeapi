import type { Pokemon } from '../../types/pokemon';
import { getPokemonColor } from '../../utils/typeColors';
import Modal from '../Modal';
import PokemonCardAbout from './PokemonCardAbout';
import PokemonCardHeader from './PokemonCardHeader';
import PokemonCardImage from './PokemonCardImage';
import PokemonCardStats from './PokemonCardStats';

type Props = {
    pokemon: Pokemon;
    closeModal: () => void;
};

export default function PokemonCard({ pokemon, closeModal }: Props) {
    const { backgroundColor, textColor, muiColor } = getPokemonColor(pokemon.types[0]);

    console.log(pokemon);

    return (
        <Modal>
            <div className={`flex h-[600px] w-[400px] flex-col rounded-md ${backgroundColor} p-1 shadow-lg`}>
                <div className='flex basis-[30%] flex-col gap-3'>
                    <PokemonCardHeader id={pokemon.id} name={pokemon.name} closeModal={closeModal} />
                    <PokemonCardImage name={pokemon.name} image={pokemon.gif || pokemon.sprite} />
                </div>

                <div className='flex flex-1 flex-col gap-5 rounded bg-white'>
                    <div className='flex justify-center gap-5 py-3'>
                        {pokemon.types.map((pokemonType) => (
                            <span className={`rounded-md p-1 font-semibold text-white capitalize ${getPokemonColor(pokemonType).backgroundColor}`}>
                                {pokemonType}
                            </span>
                        ))}
                    </div>
                    <PokemonCardAbout height={pokemon.height} weight={pokemon.weight} />
                    <PokemonCardStats stats={pokemon.stats} textColor={textColor} muiColor={muiColor} />
                </div>
            </div>
        </Modal>
    );
}

import { CircleX } from 'lucide-react';

type Props = {
    id: number;
    name: string;
    closeModal: () => void;
};

export default function PokemonCardHeader({ id, name, closeModal }: Props) {
    return (
        <div className='flex items-center justify-between px-3 font-bold text-white'>
            <button type='button' onClick={closeModal} className='cursor-pointer'>
                <CircleX />
            </button>
            <h3 className='text-center text-3xl capitalize'>{name} </h3>
            <p>#{id} </p>
        </div>
    );
}

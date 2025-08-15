import { Divider } from '@mui/material';
import { Ruler, Weight } from 'lucide-react';

type Props = {
    weight: string;
    height: string;
};

export default function PokemonCardAbout({ height, weight }: Props) {
    return (
        <div className='flex justify-center gap-10 text-gray-700'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                    <Weight />
                    <p> {weight} kg</p>
                </div>
                <div className='text-center'>Weight</div>
            </div>
            <Divider orientation='vertical' flexItem />
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                    <Ruler />
                    <p> {height} m</p>
                </div>
                <div className='text-center'>Height</div>
            </div>
        </div>
    );
}

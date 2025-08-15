import { Divider, LinearProgress } from '@mui/material';

type Props = {
    stats: {
        name: string;
        value: number;
    }[];
    textColor: string;
    muiColor: {
        main: string;
        alt: string;
    };
};

const keyStats: Record<string, string> = {
    hp: 'hp',
    attack: 'atk',
    defense: 'def',
    'special-attack': 'satk',
    'special-defense': 'sdef',
    speed: 'spd',
};

export default function PokemonCardStats({ stats, textColor, muiColor }: Props) {
    return (
        <div className={`${textColor} flex-1 space-y-3 px-5 font-semibold`}>
            <h3 className='text-center text-xl'>Base Stats</h3>

            <ul className='flex flex-col uppercase'>
                {stats.map((stat) => (
                    <li key={stat.name} className='flex gap-3'>
                        <p className='w-10'>{keyStats[stat.name]}</p>
                        <Divider
                            orientation='vertical'
                            sx={{
                                borderColor: muiColor.main,
                            }}
                            flexItem
                        />
                        <p className='w-10'>{stat.value}</p>
                        <LinearProgress
                            variant='determinate'
                            value={Math.round((stat.value / 250) * 100)}
                            className='flex-1 self-center'
                            sx={{
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: muiColor.main,
                                },
                                backgroundColor: muiColor.alt,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

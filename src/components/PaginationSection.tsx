import Pagination from '@mui/material/Pagination';

type Props = {
    numberPages: number;
    page: number;
    onChangePage: (e: React.ChangeEvent<unknown>, value: number) => void;
};

export default function PaginationSection({ numberPages, page, onChangePage }: Props) {
    return (
        <section className='mx-auto w-fit rounded-md p-1'>
            <Pagination
                count={numberPages}
                page={page}
                onChange={onChangePage}
                variant='outlined'
                shape='rounded'
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: 'white',
                        borderColor: 'white',
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: 'white',
                        color: 'black',
                        borderColor: 'white',
                    },
                }}
            />
        </section>
    );
}

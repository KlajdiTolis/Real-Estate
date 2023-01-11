import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Paginationn() {
    const cards = [1, 2];

    return (
        <Stack spacing={2}>
            <Pagination
                count={10}
                renderItem={(cards) => (
                    <PaginationItem
                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...cards}
                    />
                )}
            />
        </Stack>
    );
}
export default Paginationn;
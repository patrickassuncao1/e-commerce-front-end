import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

type LoadingType = {
    isOpen: boolean
}

const Loading = ({ isOpen }: LoadingType) => {

    return (
        <Backdrop
            sx={{ color: '#ffffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isOpen}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default Loading;
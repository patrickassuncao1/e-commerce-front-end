import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';


const Onload: React.FC = () => {
    const { onLoading } = useAuth();
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={onLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default Onload;
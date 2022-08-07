import { Alert, Backdrop } from '@mui/material';
import React from 'react';

export type AlertType = {
    message: string,
    severity: "error" | "success" | "info" | "warning",
    isOpen: boolean,
    setOpen?: Function
}

const AlertFixed = ({ message, severity, isOpen, setOpen }: AlertType) => {
    const handleClose = () => {
        setOpen && setOpen((e: AlertType) => ({ ...e, isOpen: false }));
    };

    return (
        <Backdrop
            sx={
                {
                    bgcolor: 'transparent',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    alignItems: 'flex-start'
                }}
            open={isOpen}
            onClick={handleClose}
        >
            <Alert severity={severity}
                sx={{
                    marginTop: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem'
                }}>
                {message}
            </Alert>
        </Backdrop>
    );
}

export default AlertFixed;
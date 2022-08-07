import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React, { useState } from 'react';

type AlertType = {
    onClickButtonAlert: () => void
}

const Alert = ({ onClickButtonAlert }: AlertType) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
            >
                Adicionar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Para Adicionar uma comentário e necessário está logado na sua conta
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onClickButtonAlert}
                        autoFocus
                    >
                        Fazer Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Alert;
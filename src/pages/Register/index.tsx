import React, { FormEvent, useEffect, useState } from 'react';
import * as yup from 'yup';
import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { boxContainer, styleAvatar, styleGrid, styleInput } from '../Login/styles';
import { useNavigate } from 'react-router-dom';
import AlertFixed, { AlertType } from '../../components/AlertFixed';
import { userSchemaRegister } from '../../utils/validations';
import Loading from '../../components/Loading';
import { createUser } from '../../services/api';
import useAuth from '../../hooks/useAuth';

const Register: React.FC = () => {

    const { user, authenticate } = useAuth();
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [alert, setAlert] = useState<AlertType>({
        isOpen: false,
        message: '',
        severity: 'error'
    })

    const [openLoading, setOpenLoading] = useState(false);


    useEffect(() => {
        if (user?.email) navigate('/', { replace: true });
    }, [user]); // eslint-disable-line


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setOpenLoading(true);
        try {
            await userSchemaRegister.validate(inputData);
            await createUser({ email: inputData.email, name: inputData.name, password: inputData.password });
            await authenticate(inputData.email, inputData.password);
        } catch (error: any) {
            if (error instanceof yup.ValidationError) {
                setAlert({ isOpen: true, message: error.message, severity: 'error' })
            } else {
                setAlert({ isOpen: true, message: error.response.data.message, severity: 'error' })
            }
        } finally {
            setOpenLoading(false);
            setTimeout(() => {
                setAlert((e) => ({ ...e, isOpen: false }));
            }, 1500)
        }
    }

    return (
        <>
            <AlertFixed
                severity={alert.severity}
                message={alert.message}
                isOpen={alert.isOpen}
                setOpen={setAlert}
            />
            <Loading isOpen={openLoading} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} alignItems="center" square sx={styleGrid}>
                <Box sx={{ ...boxContainer, maxWidth: 500, margin: 'auto' }} >
                    <Avatar sx={styleAvatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color='primary'>
                        Registro
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} marginTop={1}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            autoComplete='off'
                            autoFocus
                            sx={styleInput}
                            value={inputData.name}
                            onChange={({ target: { value } }) => setInputData({ ...inputData, name: value })}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Endereço de email"
                            name="email"
                            autoComplete='off'
                            sx={styleInput}
                            value={inputData.email}
                            onChange={({ target: { value } }) => setInputData({ ...inputData, email: value })}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            variant="outlined"
                            autoComplete='off'
                            sx={styleInput}
                            value={inputData.password}
                            onChange={({ target: { value } }) => setInputData({ ...inputData, password: value })}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="confPassword"
                            label="Confirmar sua senha"
                            type="password"
                            id="confPassword"
                            variant="outlined"
                            autoComplete='off'
                            sx={styleInput}
                            value={inputData.confirmPassword}
                            onChange={({ target: { value } }) => setInputData({ ...inputData, confirmPassword: value })}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color={'secondary'}
                        >
                            Registra-se
                        </Button>
                        <Typography variant="body2" color="primary" align="center" sx={{ mt: 5 }} >
                            Possuir Conta ? Realizer o
                            <Link
                                color="secondary"
                                href="#"
                                marginLeft={1}
                                onClick={() => navigate('/login', { replace: true })}
                            >
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </>

    );
}

export default Register;
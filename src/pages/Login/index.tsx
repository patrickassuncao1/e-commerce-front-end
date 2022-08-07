import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { boxContainer, styleAvatar, styleGrid, styleInput } from './styles';
import { useNavigate } from 'react-router-dom';
import { userSchemaLogin } from '../../utils/validations';
import Loading from '../../components/Loading';
import AlertFixed, { AlertType } from '../../components/AlertFixed';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { user, authenticate } = useAuth();

    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    });

    const [alert, setAlert] = useState<AlertType>({
        isOpen: false,
        message: '',
        severity: 'error'
    })

    const [openLoading, setOpenLoading] = useState(false);

    useEffect(() => {
        if(user?.email)  navigate('/', { replace: true });
    },[user]); // eslint-disable-line

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setOpenLoading(true);
        try {
            await userSchemaLogin.validate(inputData);
            await authenticate(inputData.email, inputData.password);
        } catch (error: any) {
            if (error instanceof yup.ValidationError) {
                setAlert({ isOpen: true, message: error.message, severity: 'error' })
            } else {
                setAlert({ isOpen: true, message: error.response.data.message , severity: 'error' })
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
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} marginTop={1}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Endereço de email"
                            name="email"
                            autoComplete='off'
                            autoFocus
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

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color={'secondary'}
                        >
                            Login
                        </Button>
                        <Typography variant="body2" color="primary" align="center" sx={{ mt: 5 }} >
                            Não Possuir Conta ? Realizer o seu
                            <Link
                                color="secondary"
                                href="#"
                                marginLeft={1}
                                onClick={() => navigate('/registro', { replace: true })}
                            >
                                Cadastro
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}

export default Login;
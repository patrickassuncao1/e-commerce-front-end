import { Container, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { margintop } from '../../pages/Home/styles';
import { flexContainer, flexContainerColumn } from './styles';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box component='footer' sx={{ ...margintop, borderTop: '2px solid gray' }} >
      <Container maxWidth="sm" sx={flexContainer}>
        <Box component='div'>
          <Typography variant="h6" component="div" fontWeight='bold' color="primary">
            E-commerce
          </Typography>
        </Box>
        <Box component='div' sx={flexContainerColumn} marginLeft={8}>
          <Link
            href="#"
            underline="hover"
            fontSize={'0.875rem'}
            fontWeight='bold'
            marginTop={1}
            color={location.pathname === '/' ? 'secondary' : 'primary'}
            onClick={() => navigate('/')}
          >
            HOME
          </Link>
          <Link
            href="#"
            underline="hover"
            fontSize={'0.875rem'}
            fontWeight='bold'
            marginTop={1}
            onClick={() => navigate('/registro')}
          >
            REGISTRO
          </Link>
          <Link
            href="#"
            underline="hover"
            fontSize={'0.875rem'}
            fontWeight='bold'
            marginTop={1}
            onClick={() => { navigate('/login')}}
          >
            LOGIN
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
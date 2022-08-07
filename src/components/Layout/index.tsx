import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { bgColor, padding } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = () => {
    return (
        <Box sx={bgColor}>
            <Header />
            <Container component="main" color='primary' maxWidth="lg" sx={padding}>
                <Outlet />
            </Container>
            <Footer />
        </Box>

    );
}

export default Layout;
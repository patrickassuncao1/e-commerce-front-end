import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { marginTopSections, styleImgBox, styleImgContainer } from '../styles';


const About: React.FC = () => {
    return (
        <Box sx={marginTopSections} component="section">
            <Typography variant="h5" component='h6' fontWeight='bold' color="primary">
                Sobre
            </Typography>
            <Box component="div" sx={{ ...styleImgContainer, marginTop: 2 }}>
                <Box component="div" sx={styleImgBox}>
                    <img src="/img/about.webp" alt="banner" loading="lazy" />
                </Box>
            </Box>
            <Box component="div" sx={{ ...styleImgContainer, marginTop: 5 }}>
                <Typography variant="h6" component='h6' fontWeight='bold' sx={{maxWidth: 500}} color="primary">
                    Um simples e-commerce desenvolvido para praticar com react js.
                </Typography>
            </Box>
        </Box>
    );
}

export default About;
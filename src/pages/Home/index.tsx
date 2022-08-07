import { Box } from '@mui/material';
import React from 'react';
import About from './About';
import Popular from './Popular';
import { styleImgBox, styleImgContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Box component='div'>
      <Box component='section' sx={styleImgContainer}>
        <Box component='div' sx={styleImgBox}>
          <img src="/img/img-skate.webp" alt="img-skate"  loading="lazy"/>
        </Box>
      </Box>
      <Popular />
      <About />
    </Box>
  );
}

export default Home;
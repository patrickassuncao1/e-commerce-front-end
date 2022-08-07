import { Grid, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productType } from '../../../@types';
import { getPopularProducts } from '../../../services/api';
import { margintop, marginTopSections, stylePaper } from '../styles';

const Popular: React.FC = () => {

    const [products, setProducts] = useState<productType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await getPopularProducts();
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    return (
        <Box component='section' sx={marginTopSections}>
            <Typography variant="h5" component='h6' fontWeight='bold' color="primary">
                Popular
            </Typography>
            <Grid sx={{ flexGrow: 1, ...margintop }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        {products.map((data, index) => (
                            <Grid key={index} item>
                                <Link href='#' onClick={() => navigate('/item/' + data.id)}>
                                    <Paper
                                        sx={stylePaper}
                                    >
                                        <img src={data.path} alt="img" loading="lazy" />
                                    </Paper>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Popular;
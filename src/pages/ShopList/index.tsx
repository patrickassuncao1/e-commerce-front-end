import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../../components/Card';
import RenderIf from '../../components/RenderIf';
import useAuth from '../../hooks/useAuth';
import useShop from '../../hooks/useShop';

const ShopList: React.FC = () => {

    const { shop, addItem, removeItem } = useShop();
    const { user } = useAuth();

    const shopLength = shop?.products.length || 0;

    return (
        <Box component='section' sx={{ minHeight: '69vh' }}>
            <RenderIf isTrue={!user}>
                <Navigate to="/login" replace={true} />
            </RenderIf>
            <Typography variant="h5" component='h6' fontWeight='bold' color="primary">
                Carrinho
            </Typography>

            <Grid sx={{ flexGrow: 1, marginTop: 5, width: '100%' }} container gap={2}>
                {shop?.products.map((item) => (
                    <Card {...item} key={item.id} onClickAdd={addItem} onClickRemove={removeItem} />
                ))}
            </Grid>
            <RenderIf isTrue={shopLength <= 0}>
                <Typography variant="h6" component='p' fontWeight='bold' textAlign='center' color="primary">
                    Sem Itens no Carrinho
                </Typography>
            </RenderIf>
        </Box>
    );
}

export default ShopList;
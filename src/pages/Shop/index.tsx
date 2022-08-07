import { Box, Button, ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { productType } from '../../@types';
import { getAllProducts } from '../../services/api';
import { imgStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import useShop from '../../hooks/useShop';

const Shop: React.FC = () => {

  const mediaQuery = useMediaQuery('(max-width:800px)');
  const [products, setProducts] = useState<productType[]>([]);
  const { addItem } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <Box component='section' sx={{minHeight: '69vh'}}>
      <Typography variant="h5" component='h6' fontWeight='bold' color="primary">
        Todos os Produtos
      </Typography>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={mediaQuery ? 1 : 3} gap={10}>
        {products.map((item) => (
          <ImageListItem key={item.id} sx={imgStyles}>
            <img
              src={`${item.path}?w=248&fit=crop&auto=format`}
              srcSet={`${item.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
              onClick={() => navigate('/item/' + item.id)}
            />
            <ImageListItemBar
              title={item.name}
              subtitle={'Preço R$: ' + item.price}
              actionIcon={
                <Button
                  variant="contained"
                  color='secondary'
                  sx={{ marginRight: 1 }}
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => addItem(item)}
                >
                  Adicionar
                </Button>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Shop;
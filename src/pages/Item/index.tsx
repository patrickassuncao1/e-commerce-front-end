import { Box, Button, Divider, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../@types';
import { flexContainerColumn } from '../../components/Footer/styles';
import RenderIf from '../../components/RenderIf';
import useShop from '../../hooks/useShop';
import { firstProduct } from '../../services/api';
import { margintop, marginTopSections } from '../Home/styles';
import Comment from './Comment';
import { containerButton, containerDescription, containerTexts, marginTopMedia, styleImgItem, styleList } from './styles';

const Item: React.FC = () => {

    const { addItem } = useShop();
    const [product, setProduct] = useState<products>();

    const { id } = useParams();

    const getAProduct = async () => {
        if (!id) return;
        try {
            const response = await firstProduct(id);
            setProduct(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAProduct();
    }, []); // eslint-disable-line

    const handleClick = () => {
        if (!product) return;

        addItem({ id: product.id, name: product.name, path: product.path, price: product.price });
    }

    return (
        <Box component='section' sx={marginTopSections}>
            <Grid sx={{ flexGrow: 1, ...margintop }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={8}>
                        <Grid item>
                            <Paper
                                sx={styleImgItem}
                            >
                                <img src={product?.path} alt="img" />
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Box component='div' sx={containerDescription}>
                                <Typography variant="h5" component='h6' fontWeight='bold' color="primary">
                                    {product?.name}
                                </Typography>
                                <Box component='div' width='100%' sx={marginTopMedia} >
                                    <Box component='div' sx={containerTexts}>
                                        <Typography fontSize={'1rem'} component='span' fontWeight='bold' color="primary">
                                            Preço :
                                        </Typography>
                                        <Typography fontSize={'1rem'} component='span' fontWeight='bold' color="primary">
                                            R$ {product?.price}
                                        </Typography>
                                    </Box>
                                    <Box component='div' sx={containerTexts} marginTop={5}>
                                        <Typography fontSize={'1rem'} component='span' fontWeight='bold' color="primary">
                                            Descrição :
                                        </Typography>
                                        <Typography fontSize={'1rem'} component='span' fontWeight='bold' color="primary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sapiente delectus,
                                            reprehenderit totam veritatis modi sequi
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box component='div' sx={containerButton} onClick={handleClick}>
                                    <Button variant="contained" color='secondary'>Adicionar ao carrinho</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box component='div' marginTop={10} sx={flexContainerColumn}>
                <Comment productId={id || ""} getAProduct={getAProduct}>
                    <RenderIf isTrue={product ? product.Comments.length > 0 : false}>
                        <List sx={styleList}>
                            {product?.Comments?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <ListItem alignItems="flex-start" >
                                        <ListItemText
                                            primary={item.username}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {item.comment}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    </RenderIf>
                </Comment>
            </Box>
        </Box>
    );
}

export default Item;
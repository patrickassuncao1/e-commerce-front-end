import { Grid, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { boxImg, flexContainer, Img, paperStyle } from './styles';
import { productType, shopType } from "../../@types";

type CardType = shopType & {
    onClickAdd: (product: productType) => void,
    onClickRemove: (product: shopType) => void,
}

const Card = ({ name, path, price, qnt, id, onClickAdd, onClickRemove }: CardType) => {
    return (
        <Paper
            sx={paperStyle}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <Box component='div' sx={boxImg}>
                        <Img alt="complex" src={path} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box component="div" sx={flexContainer}>
                                <IconButton
                                    aria-label="remove"
                                    size="large"
                                    color='secondary'
                                    onClick={() => onClickRemove({ id, name, path, price, qnt })}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="body2" marginX={2} color="text.secondary">
                                    {qnt}
                                </Typography>
                                <IconButton
                                    aria-label="add"
                                    size="large"
                                    color='secondary'
                                    onClick={() => onClickAdd({ id, name, path, price })}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            R${price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Card;
import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledBadge, styleShoppingCartIcon } from './styles';
import useShop from '../../hooks/useShop';
import { useLocation } from 'react-router-dom';

const Cart = ({ onClick }: { onClick?: () => void }) => {
    const { shop } = useShop();
    const location = useLocation();
    return (
        <IconButton aria-label="cart" onClick={onClick}>
            <StyledBadge badgeContent={shop?.total} >
                <ShoppingCartIcon
                    sx={styleShoppingCartIcon}
                    color={location.pathname === '/shop/lista' ? 'secondary' : 'primary'}
                />
            </StyledBadge>
        </IconButton>
    );
}

export default Cart;
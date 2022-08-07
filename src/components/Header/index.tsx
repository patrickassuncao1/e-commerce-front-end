import React from 'react';
import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { boxNameUser, boxStyle, boxStyleLinks, boxStyleLinksMobile, boxTitle, textBold } from './styles';
import Cart from '../Cart';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import RenderIf from '../RenderIf';

const Header: React.FC = () => {
    const pages = [
        { path: '/', name: 'Home' },
        { path: '/shop', name: 'Shop' }
    ];

    const { user, logout } = useAuth();
    const location = useLocation();

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (path: string) => {
        setAnchorElNav(null);
        navigate(path, { replace: true })
    };


    return (
        <Box sx={boxStyle} component="header">
            <AppBar position="static" component="nav" elevation={0} color="transparent">
                <Toolbar >
                    <Box component="div" sx={boxTitle}>
                        <Typography variant="h6" component="h6" fontWeight='bold' color="primary">
                            E-commerce
                        </Typography>
                        <RenderIf isTrue={user ? true : false}>
                            <Box component='div' sx={boxNameUser}>
                                <Typography component='span' color='primary' fontSize='0.6rem' fontWeight='bold'>
                                    Bem Vindo !
                                    <Link
                                        href="#"
                                        underline="hover"
                                        marginLeft={1}
                                        fontSize='0.6rem'
                                        fontWeight='bold'
                                        onClick={logout}
                                    >
                                        Sair
                                    </Link>
                                </Typography>
                                <Typography fontSize='0.85rem' component="h6" fontWeight='bold' color="secondary">
                                    {user?.name}
                                </Typography>
                            </Box>
                        </RenderIf>
                    </Box>
                    <Box sx={boxStyleLinksMobile}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={boxStyleLinksMobile}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={() => handleCloseNavMenu(page.path)}>
                                    <Typography
                                        textAlign="center"
                                        fontWeight='bold'
                                        color={location.pathname === page.path ? 'secondary' : ''}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={() => handleCloseNavMenu('/shop/lista')}>
                                <Cart />
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={boxStyleLinks} >
                        {pages.map((page, index) => (
                            <Button
                                color={location.pathname === page.path ? 'secondary' : 'primary'}
                                sx={textBold}
                                key={index}
                                onClick={() => navigate(page.path)}
                            >
                                {page.name}
                            </Button>
                        ))}
                        <Box component='span'>
                            <Cart
                                onClick={() => navigate('/shop/lista')}
                            />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
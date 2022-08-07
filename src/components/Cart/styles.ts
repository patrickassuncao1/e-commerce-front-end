import { styled, SxProps } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.text.primary}`,
        padding: '0 4px',
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        [theme.breakpoints.up('md')]: {
            color: theme.palette.primary.main,
            border: `2px solid ${theme.palette.background.paper}`,
        },
    },
}));


export const styleShoppingCartIcon = {
    '@media(max-width: 900px)': {
        color: 'black'
    }
} as SxProps | undefined;




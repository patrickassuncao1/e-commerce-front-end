import { SxProps } from "@mui/material";

export const boxContainer = {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
} as SxProps | undefined

export const styleAvatar = {
    m: 1,
    bgcolor: 'secondary.main'
} as SxProps | undefined

export const styleGrid = {
    minHeight: '80vh',
    backgroundColor: '#111111',
} as SxProps | undefined

export const styleInput = {
    '& input': {
        color: 'white',
    },
    '& label': {
        color: 'white',
    },
    '& fieldset': {
        borderColor: 'white',
    }

} as SxProps | undefined
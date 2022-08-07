import { SxProps } from "@mui/material";

export const styleImgItem = {
    maxWidth: 500,
    height: 'auto',
    'img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 5
    }
} as SxProps | undefined

export const containerTexts = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    '& span': {
        flex: 1,
    },
    '@media(max-width: 600px)': {
        flexDirection: 'column'
    }
} as SxProps | undefined

export const containerDescription = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    maxWidth: 500,
} as SxProps | undefined

export const containerButton = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
        borderRadius: 2
    },
    '@media(max-width: 1111px)': {
        marginTop: 4,
        justifyContent: 'center'
    }
} as SxProps | undefined

export const marginTopMedia = {
    '@media(max-width: 1111px)': {
        marginTop: 3
    }
} as SxProps | undefined

export const container = {
    width: 600,
    maxWidth: '100%'
} as SxProps | undefined
export const boxForm = {
    width: '100%',
    'textarea': {
        width: '100%',
        fontSize: '1rem',
        border: '1px solid rgba(0,0,0,0.5)',
        outline: 'none',
        color: 'black',
        borderRadius: 2,
        p: 1
    }
} as SxProps | undefined

export const styleList = {
    width: '100%', 
    bgcolor: 'background.paper'
} as SxProps | undefined

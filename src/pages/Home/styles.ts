import { SxProps } from "@mui/material";

export const styleImgContainer = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
} as SxProps | undefined

export const styleImgBox = {
    width: 500,
    marginTop: 2,
    height: 'auto',
    '& img': {
        width: '100%',
        height: '100%',
        borderRadius: 2,
        objectFit: 'cover',
        transform: "rotate(-3deg)"
    }

} as SxProps | undefined

export const margintop = {
    marginTop: 3
} as SxProps | undefined

export const marginTopSections = {
    marginTop: 5
} as SxProps | undefined


export const stylePaper = {
    height: 350,
    maxWidth: 250,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 5
    },
    '&:hover': {
        transform: "translateY(-0.25rem)"
    }
} as SxProps | undefined

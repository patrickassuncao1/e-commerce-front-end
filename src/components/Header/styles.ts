import { SxProps } from "@mui/material";

export const boxStyle = {
    maxWidth: 1200,
    flexGrow: 1,
    margin: 'auto',
    paddingTop: 2
} as SxProps | undefined


export const boxStyleLinks = {
    display: { xs: 'none', md: 'block' }
} as SxProps | undefined

export const boxStyleLinksMobile = {
    display: { xs: 'block', md: 'none' }
}as SxProps | undefined

export const textBold = {
    fontWeight: 'bold',
} as SxProps | undefined


export const boxTitle =  {
    flexGrow: 1,
    display: 'flex'
} as SxProps | undefined

export const boxNameUser = {
    marginLeft: '2rem',
    position: 'relative',
    minWidth: 85,
    display:'flex',
    alignItems:'flex-end',
    '& span' : {
        position: 'absolute',
        top: 0
    }
} as SxProps | undefined

import styled from "@emotion/styled";
import { SxProps, Theme } from "@mui/material";

export const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});

export const paperStyle = {
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme: Theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
} as SxProps | undefined;

export const boxImg = {
   width: '100%',
   maxWidth: 468,
   display: 'block',
   height: 'auto',
} as SxProps | undefined

export const flexContainer = {
    display: 'flex',
    alignItems:'center',
} as SxProps | undefined
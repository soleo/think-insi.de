'use client';
import { Roboto, Big_Shoulders_Display } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const bigShoulders = Big_Shoulders_Display({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontFamily: bigShoulders.style.fontFamily,
      fontSize: '5.5rem',
      color: '#41B6E6',
      fontWeight: 700,
    },
    h2: {
      fontFamily: bigShoulders.style.fontFamily,
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: bigShoulders.style.fontFamily,
      fontSize: '2.5rem',

      fontWeight: 700,
    },
    h4: {
      fontFamily: bigShoulders.style.fontFamily,
      fontSize: '2rem',
      fontWeight: 700,
    },
    h5: {
      fontFamily: bigShoulders.style.fontFamily,
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#41B6E6',
    },
    secondary: {
      main: '#E4002B',
    },
  },

});

export default theme;
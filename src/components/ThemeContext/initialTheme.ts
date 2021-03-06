import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { PaletteType } from '@material-ui/core';
import { darken } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const initialTheme: (
  paletteType: PaletteType,
) => ThemeOptions = (paletteType) => {
  const primary = paletteType === 'light' ? pink[400] : pink[500];
  const secondary =
    paletteType === 'light' ? darken(purple.A400, 0) : purple[300];
  return {
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: paletteType === 'light' ? grey[100] : grey[800],
        paper: paletteType === 'light' ? '#fff' : grey[900],
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
    },
    props: {
      MuiButton: {
        variant: 'contained',
      },
    },
    overrides: {
      MuiButton: {
        contained: {
          borderRadius: 15,
          border: 0,
        },
      },
    },
  };
};

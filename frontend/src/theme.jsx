import red from '@mui/material/colors/red';
import createTheme from '@mui/material/styles/createTheme';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        background: {
            main: '#ecfeff',
        },
        secondary: {
            main: '#9ca3af',
        },
        error: {
            main: red.A400,
        },
    },
});
export default theme;
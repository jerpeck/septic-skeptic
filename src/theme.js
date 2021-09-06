import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#42A5F5',
        },
        secondary: {
            main: '#F59342'
        },
        error: {
            main: '#FF1616'
        },
        warning: {
            main: '#FFE500'
        },
        info: {
            main: '#36F55C'
        },
        success: {
            main: '#36F55C'
        },
    },
    typography: {
        fontFamily: 'Titillium Web'
    },
});

export default theme;
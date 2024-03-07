import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import App from './App.jsx'
import '~/index.css'
import theme from '~/theme.jsx'
import {Provider} from "react-redux";
import {store} from "~/redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <CssBaseline/>
                <App/>
            </React.StrictMode>
        </ThemeProvider>
    </Provider>
)

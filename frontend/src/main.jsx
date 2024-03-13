import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import '~/index.css'
import theme from '~/theme.jsx'
import {Provider} from "react-redux";
import {store} from "~/redux/store.js";
import {RouterProvider} from "react-router-dom";
import router from "~/router.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </React.StrictMode>
        </ThemeProvider>
    </Provider>
)

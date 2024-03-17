import React from 'react'
import ReactDOM from 'react-dom/client'
import '~/index.css'
import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import {Provider} from "react-redux";
import {store} from "~/redux/store.js";
import {RouterProvider} from "react-router-dom";
import router from "~/router.jsx";
import Loading from "~/Component/Loading.jsx";
import 'antd/dist/reset.css'
import Toast from "~/Component/Toast.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ConfigProvider autoInsertSpaceInButton={false} locale={viVN}>
            <React.StrictMode>
                <Loading />
                <Toast />
                <RouterProvider router={router}/>
            </React.StrictMode>
        </ConfigProvider>
    </Provider>
)

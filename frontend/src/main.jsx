import React from 'react'
import ReactDOM from 'react-dom/client'
import '~/index.css'
import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { Provider } from "react-redux";
import { store, persistor } from "~/redux/store.js";
import 'antd/dist/reset.css'
import { PersistGate } from 'redux-persist/integration/react'
import App from '~/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider autoInsertSpaceInButton={false} locale={viVN}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </ConfigProvider>
        </PersistGate>
    </Provider>
)

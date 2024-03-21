import Layout from "~/layouts/index.jsx";
import Dashboard from "~/pages/Dashboard.jsx";
import Login from "~/pages/Login.jsx";
import {Navigate} from "react-router-dom";

const mainRouter = (isLogin) => {
    
    return [
        {
            path: '/',
            element: isLogin === true ? <Layout/> : <Navigate to="/login" />,
            children: [
                {
                    path: '/',
                    element: <Dashboard/>,
                }
            ]
        },
        {
            path: '/login',
            element: isLogin ? <Navigate to="/" /> : <Login />,
        }
    ]
}

export default mainRouter;
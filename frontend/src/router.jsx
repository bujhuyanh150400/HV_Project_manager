import Dashboard from "~/pages/Dashboard.jsx";
import Login from "~/pages/Login.jsx";
import {Navigate} from "react-router-dom";
import ManagerUsers from "~/pages/ManagerUsers.jsx";
import LayoutAdmin from "~/layouts/index.jsx";

const mainRouter = (isLogin) => {
    return [
        {
            path: '/',
            element: isLogin === true ? <LayoutAdmin/> : <Navigate to="/login" />,
            children: [
                {
                    path: '/',
                    element: <Dashboard/>,
                },
                {
                    path: '/ManagerUsers',
                    element: <ManagerUsers/>,
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
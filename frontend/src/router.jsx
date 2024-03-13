import { createBrowserRouter} from "react-router-dom";
import Layout from "~/layouts/index.jsx";
import Dashboard from "~/pages/Dashboard.jsx";
import Login from "~/pages/Login.jsx";

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        children:[
            {
                path: '/',
                element : <Dashboard/>,
            }
        ]
    },
    {
        path: '/login',
        element : <Login/>,
    }
]);

export default mainRouter;
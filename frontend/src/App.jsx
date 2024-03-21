import Loading from "~/Component/Loading.jsx";
import Toast from "~/Component/Toast.jsx";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserRouter} from "react-router-dom";
import mainRouter from "~/router.jsx";

const App = () => {
    const login = useSelector((state) => state.login.isLogin);
    console.log(login)
    const router = createBrowserRouter(mainRouter(login));
    return (
        <>
            <Loading />
            <Toast />
            <RouterProvider router={router} />
        </>
    )
}

export default App;
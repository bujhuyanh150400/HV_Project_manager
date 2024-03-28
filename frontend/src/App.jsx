import Loading from "~/Component/Loading.jsx";
import Toast from "~/Component/Toast.jsx";
import { RouterProvider } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { createBrowserRouter} from "react-router-dom";
import mainRouter from "~/router.jsx";
import { jwtDecode } from "jwt-decode";
import {logOut} from "~/redux/reducers/loginSlice.js";
const App = () => {
    const dispatch = useDispatch();
    // Kiểm tra xem thời gian hết hạn của JWT có lớn hơn thời gian hiện tại hay không
    const login = useSelector((state) => {
        const token = state.login.token;
        let isExpired = false;
        if (token) {
            const decode_token = jwtDecode(token)
            const current_time = Date.now() / 1000;
            isExpired = decode_token.exp >= current_time;
            if (isExpired === false) {
                dispatch(logOut());
            }
        }
        return isExpired;
    });
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
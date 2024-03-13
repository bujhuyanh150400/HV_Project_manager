import Header from "~/layouts/Header.jsx";
import Menu from "~/layouts/Menu.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Menu/>
            đây là Layout
            <Outlet/>
        </>
    );
}

export default Layout;



import Cookie from "cookie-universal"
import { Navigate, Outlet } from "react-router-dom";

const GlobalRoute = () => {
    const token = Cookie().get('token');
    return (
        token ? <Navigate to={"main"} /> : <Outlet/>
    );
}

export default GlobalRoute;

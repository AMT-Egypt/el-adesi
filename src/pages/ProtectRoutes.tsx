import { Navigate, Outlet } from "react-router-dom";
import Cookie from "cookie-universal"

const ProtectRoutes = () => {
    const token = Cookie().get('token');;
    return (
        token ? <Outlet/> : <Navigate to={"login"} />
    );
}

export default ProtectRoutes;

import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = () => {
    const token = localStorage.userToken;
    return (
        token ? <Outlet/> : <Navigate to={"login"} />
    );
}

export default ProtectRoutes;

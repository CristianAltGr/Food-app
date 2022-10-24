import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./provider";


const PrivateRoute = () => {

    const [logged] = useContext(AppContext);

    if (!logged) {
        setTimeout(() => alert("You must be logged for watch"));
        return <Navigate to={process.env.PUBLIC_URL} />
    }

    return (
        <>
            <Outlet />
        </>
    );
}

export default PrivateRoute;


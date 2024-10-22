import { Navigate, Outlet } from "react-router-dom";


interface PrivateRouteProps {
    auth: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({auth}) => {
    return(
        auth ? <Outlet/> : <Navigate to='/auth'/>
    )
}

export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "./components/constants/constants";
const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('token');

    if(!token) {
        return <Navigate to = {LOGIN}/>
    }
    return children? children : <Outlet/>
};
export default PrivateRoute;
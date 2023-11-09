import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { Spinner } from "flowbite-react";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if (loading) {
        return (
            <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRouter;
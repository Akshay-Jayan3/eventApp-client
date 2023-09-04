
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    // const { loading, isAuthenticated, user } = useSelector(state => state.user);
    const loading=false
    const isAuthenticated=true

    return (
        <>
            {loading === false && (
                isAuthenticated === false ? <Navigate to="/login" /> : children
            )}
        </>
    );
};

export default ProtectedRoute;
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const useAuth = () => {
    const { authenticate, logout, user, onLoading } = useContext(AuthContext);

    return { authenticate, logout, user, onLoading };
}

export default useAuth;
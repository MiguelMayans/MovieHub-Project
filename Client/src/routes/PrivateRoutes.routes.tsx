import { ReactNode, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

type PrivateRoutesProps = {
    children: ReactNode
}


const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
        }
    }, [isLoading]);

    useEffect(() => {
        const redirect = async () => {
            if (!isAuthenticated && !loading) {
                await loginWithRedirect();
            }
        };

        redirect();
    }, [isAuthenticated, loginWithRedirect, loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : <Navigate to={"/"} />;
}


export default PrivateRoutes

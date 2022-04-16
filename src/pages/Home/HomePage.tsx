import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const HomePage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            {useEffect(() => {
                isAuth ? navigate('/ani-list') : navigate('/login')
            }, [isAuth, navigate])}
        </>
    )
}

export default HomePage;
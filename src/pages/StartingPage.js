import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';

function StartingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            navigate('/login')
        }, 5000)
    }, [navigate])
    return (
        <>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <LoginPage />
                )
            }
        </>
    )
}

export default StartingPage
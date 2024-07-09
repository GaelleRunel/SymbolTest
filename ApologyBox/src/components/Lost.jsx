import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Lost = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    }, []);

    return (
        <>
            <h2 className='text-center'> I'm lost !</h2>
            <iframe
                src='https://giphy.com/embed/DF9cWIiWNyTLgUPkVD'
                title='lost'
            ></iframe>
        </>
    );
};

export default Lost;

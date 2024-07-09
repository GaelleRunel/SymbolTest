import React from 'react';
import useAPICall from '../hooks/useApiCall';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ApologyLine = () => {
    const { data, error, loading } = useAPICall('/api');
    const { id } = useParams();
    console.log('id', id);
    console.log('data', data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data available</p>;

    const findId = data.findIndex((data) => data.http_code === parseInt(id));
    const apologyCode = JSON.stringify(data[findId]);

    if (!apologyCode) return <NotFound />;

    return (
        <>
            <h2 className='text-center'> Excuse correspondante</h2>
            <div>{apologyCode}</div>
        </>
    );
};

export default ApologyLine;
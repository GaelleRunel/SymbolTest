import { useState, useEffect } from 'react';

const useAPICall = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Oops, there is no response');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(false);
            });
    }, [url]);

    return { data, error, loading };
};

export default useAPICall;

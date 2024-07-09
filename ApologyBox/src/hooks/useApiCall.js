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

// useFetch.js
// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;

import React, { useState } from 'react';
import useAPICall from '../hooks/useApiCall';
import Button from './Button';

function ApologyBox() {
    const { data } = useAPICall('/api');
    const [excuse, setExcuse] = useState(null);
    const [loader, setLoader] = useState();
    console.log(data);
    const getExcuse = () => {
        setLoader(true);
        setTimeout(() => {
            let randomEx = Math.floor(Math.random() * data?.length);
            setLoader(false);
            setExcuse(data[randomEx]);
        }, 1000);
    };

    return (
        <div className='container-md'>
            <h1 className='text-center'>Les Excuses de Dev</h1>
            <div className='card container-md m-4'>
                <div className='card-body'>
                    <p className='card-text text-center '>
                        {!excuse?.message
                            ? 'Cliquez pour trouver une excuse'
                            : excuse.message}
                    </p>
                    <div className='position-relative w-50 m-auto'>
                        <Button type='button' onClick={getExcuse}>
                            {!excuse
                                ? 'Trouver une Excuse'
                                : 'Trouver une autre excuse'}
                        </Button>
                        {loader && (
                            <div className='position-absolute top-0 end-0 pt-2'>
                                <div className='spinner-border spinner-border-sm text-primary'></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApologyBox;

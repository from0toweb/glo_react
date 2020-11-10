import { useState, useEffect } from 'react';

export const useFetch = firebaseDatabase => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const rootRef = firebaseDatabase().ref('/goods');
                rootRef.on('value', snap => {
                    setResponse(snap.val());
                });
            } catch (error) {
                setError(error);
            }
        };
        getData();
    }, [firebaseDatabase]);

    return { response, error };
};

import { useState, useEffect } from 'react';

export const useOrderConfirm = () => {
    const [openOrderConfirm, setOpenOrderConfirm] = useState(false);

    const closeConfirm = e => {
        if (e.key === 'Escape' || e.target.id === 'confirm') {
            setOpenOrderConfirm(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeConfirm);

        return () => {
            document.removeEventListener('keydown', closeConfirm);
        };
    }, []);

    return { openOrderConfirm, setOpenOrderConfirm, closeConfirm };
};

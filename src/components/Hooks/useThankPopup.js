import { useState, useEffect } from 'react';

export const useThankPopup = () => {
    const [openThankPopup, setOpenThankPopup] = useState(false);

    const closeThankPopup = e => {
        if (e.key === 'Escape' || e.target.id === 'thank') {
            setOpenThankPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeThankPopup);

        return () => {
            document.removeEventListener('keydown', closeThankPopup);
        };
    }, []);

    return { openThankPopup, setOpenThankPopup, closeThankPopup };
};

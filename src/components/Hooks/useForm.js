import { useState } from 'react';
import validate from '../Basket/validateInfo';

export const useForm = sendOrder => {
    const [values, setValues] = useState({
        phoneNumber: '',
        city: '',
        street: '',
        house: '',
        appartment: '',
    });

    const [errors, setErrors] = useState({ submit: false });

    const handleChange = e => {
        let { name, value } = e.target;

        if (name === 'phoneNumber') {
            value = value.replace(/[^+0-9]/g, '');
        }
        if (name === 'city') {
            value = value.replace(/[^а-яА-Я -]/g, '');
        }
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        if (Object.keys(validate(values)).length === 0) {
            sendOrder();
        }
    };

    return { values, handleChange, handleSubmit, errors };
};

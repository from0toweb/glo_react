import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../appContext';
import { formatPrice, projection, totalPrice } from '../Functions/secondaryFun';
import {
    Modal,
    ModalDialog,
    PopupButton,
    ModalContent,
    ModalTitle,
    H3,
    Price,
} from '../Styles/ModalStyle';
import { useForm } from '../Hooks/useForm';
const Text = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const ConfirmDialog = styled(ModalDialog)`
    height: auto;
`;
const ConfirmContent = styled(ModalContent)`
    align-items: center;
    justify-content: start;
`;

const ConfirmButton = styled(PopupButton)`
    margin-top: auto;
`;

const ConfirmForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;
const ConfirmInput = styled.input`
    display: block;
    border: none;
    background-color: transparent;
    border-bottom: ${({ error }) => (!!error ? '1px solid red' : '1px solid #ccc')};
    padding: 5px 0px;
    width: 100%;
`;
const ConfirmInputGroup = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 25px;
    &:nth-last-of-type(1) {
        width: 45%;
        margin-bottom: 0px;
    }
    &:nth-last-of-type(2) {
        width: 45%;
        margin-bottom: 0px;
    }
`;
const ErrorMessage = styled.span`
    position: absolute;
    bottom: -20px;
    font-size: 14px;
    color: tomato;
`;

// компонент
export const OrderConfirm = () => {
    const {
        orders,
        setOrders,
        authentication,
        firebaseDatabase,
        setOpenOrderConfirm,
        setOpenBasket,
        setOpenThankPopup,
        closeConfirm,
    } = useAppContext();

    const dataBase = firebaseDatabase();

    const total = orders.reduce((result, order) => totalPrice(order) + result, 0);

    const rulesData = {
        name: ['name'],
        price: ['price'],
        count: ['count'],
        topping: [
            'topping',
            arr =>
                arr && arr.length
                    ? arr.filter(item => item.checked).map(item => item.name)
                    : 'no toppings',
        ],
        choice: ['choice', item => (item ? item : 'no choice')],
    };

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));

        dataBase.ref('orders').push().set({
            clientName: authentication.displayName,
            clientEmail: authentication.email,
            order: newOrder,
            delivery: values,
        });
        setOrders([]);
        setOpenOrderConfirm(false);
        setOpenBasket(false);
        setOpenThankPopup(true);
        setTimeout(() => {
            setOpenThankPopup(false);
        }, 3000);
    };

    const { values, handleChange, handleSubmit, errors } = useForm(sendOrder);

    return (
        <Modal id="confirm" onClick={closeConfirm}>
            <ConfirmDialog>
                <ConfirmContent>
                    <Text>Осталось подтвердить Ваш заказ</Text>
                    <ConfirmForm>
                        <ConfirmInputGroup>
                            <ConfirmInput
                                placeholder="Номер телефона"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                error={errors.phoneNumber}
                            />
                            {errors.phoneNumber && (
                                <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                            )}
                        </ConfirmInputGroup>
                        <ConfirmInputGroup>
                            <ConfirmInput
                                placeholder="Город"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                error={errors.city}
                            />
                            {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                        </ConfirmInputGroup>
                        <ConfirmInputGroup>
                            <ConfirmInput
                                placeholder="Улица"
                                name="street"
                                value={values.street}
                                onChange={handleChange}
                                error={errors.street}
                            />
                            {errors.street && <ErrorMessage>{errors.street}</ErrorMessage>}
                        </ConfirmInputGroup>
                        <ConfirmInputGroup>
                            <ConfirmInput
                                placeholder="Дом"
                                name="house"
                                value={values.house}
                                onChange={handleChange}
                                error={errors.house}
                            />
                            {errors.house && <ErrorMessage>{errors.house}</ErrorMessage>}
                        </ConfirmInputGroup>
                        <ConfirmInputGroup>
                            <ConfirmInput
                                placeholder="Кв."
                                name="appartment"
                                value={values.appartment}
                                onChange={handleChange}
                            />
                        </ConfirmInputGroup>
                    </ConfirmForm>

                    <ModalTitle>
                        <H3>Итого:</H3>
                        <Price>{formatPrice(total)}</Price>
                    </ModalTitle>
                    <ConfirmButton onClick={handleSubmit}>Подтвердить</ConfirmButton>
                </ConfirmContent>
            </ConfirmDialog>
        </Modal>
    );
};

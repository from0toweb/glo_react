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

const Text = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const ConfirmContent = styled(ModalContent)`
    align-items: center;
    justify-content: start;
`;

const ConfirmButton = styled(PopupButton)`
    margin-top: auto;
`;

const ConfirmForm = styled.div``;
const ConfirmInput = styled.input``;

export const OrderConfirm = () => {
    const {
        orders,
        setOrders,
        authentication,
        firebaseDatabase,
        setOpenOrderConfirm,
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
        });
        setOrders([]);
        setOpenOrderConfirm(false);
    };

    return (
        <Modal>
            <ModalDialog>
                <ConfirmContent>
                    <Text>Осталось подтвердить Ваш заказ</Text>
                    <ConfirmForm>
                        <ConfirmInput placeholder="Город" />

                        <ConfirmInput placeholder="Улица" />

                        <ConfirmInput placeholder="Дом" />

                        <ConfirmInput placeholder="Кв." />

                        <ConfirmInput placeholder="Номер телефона" />
                    </ConfirmForm>
                    <ModalTitle>
                        <H3>Итого:</H3>
                        <Price>{formatPrice(total)}</Price>
                    </ModalTitle>
                    <ConfirmButton onClick={sendOrder}>Подтвердить</ConfirmButton>
                </ConfirmContent>
            </ModalDialog>
        </Modal>
    );
};

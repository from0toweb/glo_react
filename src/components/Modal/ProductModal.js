import _ from 'lodash';
import React from 'react';
import { useAppContext } from '../../appContext';
import { formatPrice, totalPrice } from '../Functions/secondaryFun';
import { useChoices } from '../Hooks/useChoices';
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import {
    Modal,
    ModalDialog,
    PopupButton,
    ModalBaner,
    ModalContent,
    ModalTitle,
    H3,
    Price,
    ModalFooter,
    ButtonIcon,
} from '../Styles/ModalStyle';
import { Choices } from './Choices';
import { CountItem } from './CountItem';
import { ModalContext } from './modalContext';
import { Toppings } from './Toppings';

export const ProductModal = () => {
    const { openItem, setOpenItem, orders, setOrders } = useAppContext();

    const counter = useCount(openItem);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if (e.target.id === 'modal') {
            setOpenItem(null);
        }
    };
    let order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const addToOrder = () => {
        const [uniqItem] = orders.filter(
            elem =>
                elem.id === order.id &&
                _.isEqual(elem.topping, order.topping) &&
                _.isEqual(elem.choice, order.choice)
        );

        if (uniqItem) {
            const newOrder = orders.map(item => {
                if (item === uniqItem) {
                    item.count += order.count;
                }
                return item;
            });

            setOrders(newOrder);
            setOpenItem(null);
        } else {
            setOrders([...orders, order]);
            setOpenItem(null);
        }
    };

    const editOrder = () => {
        const newOrder = [...orders];
        newOrder[openItem.index] = order;
        setOrders(newOrder);
        setOpenItem(null);
    };

    return (
        <ModalContext.Provider value={{ ...toppings, ...choices, ...counter, openItem: openItem }}>
            <Modal id="modal" onClick={closeModal}>
                <ModalDialog>
                    <ModalBaner img={openItem.img} />
                    <ModalContent>
                        <ModalTitle>
                            <H3>{openItem.name}</H3>
                            <Price>{formatPrice(openItem.price)}</Price>
                        </ModalTitle>
                        {openItem.toppings && <Toppings />}
                        {openItem.choices && <Choices />}
                        <ModalFooter>
                            <CountItem />
                            <PopupButton
                                onClick={isEdit ? editOrder : addToOrder}
                                disabled={openItem.choices && !choices.choice}
                            >
                                <ButtonIcon isEdit={isEdit} />
                                {formatPrice(totalPrice(order))}
                            </PopupButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalDialog>
            </Modal>
        </ModalContext.Provider>
    );
};

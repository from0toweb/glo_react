import { useState } from 'react';

const getToppings = toppings => {
    if (toppings) {
        return toppings.map(item => ({
            name: item,
            checked: false,
        }));
    }
};

export function useToppings(openItem) {
    const [toppings, setToppings] = useState(
        openItem.topping ? openItem.topping : getToppings(openItem.toppings)
    );

    const checkedToppings = id => {
        setToppings(
            toppings.map((item, i) => {
                if (id === i) {
                    item.checked = !item.checked;
                }
                return item;
            })
        );
    };

    return { toppings, checkedToppings };
}

export const totalPrice = order => {
    if (order.toppings) {
        const countTopping = order.topping.filter(item => item.checked).length;
        const priceTopping = order.topping && order.price * 0.1 * countTopping;

        return (order.price + priceTopping) * order.count;
    }
    return order.price * order.count;
};

export const checkedToppings = order => {
    const newArr = order.topping
        .filter(item => item.checked)
        .map(item => item.name)
        .join(', ');
    return newArr;
};
export const formatPrice = price => {
    return price.toLocaleString('ru-Ru', {
        style: 'currency',
        currency: 'RUB',
    });
};

export const projection = rules => {
    const keys = Object.keys(rules);
    return obj =>
        keys.reduce((newObj, key) => {
            newObj[key] = rules[key].reduce(
                (val, fn, i) => (i ? fn(val) : obj[fn]),
                null
            );
            return newObj;
        }, {});
};

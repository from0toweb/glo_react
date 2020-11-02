export const totalPrice = order => order.price * order.count;

export const formatPrice = price => {
    return price.toLocaleString('ru-Ru', {
        style: 'currency',
        currency: 'RUB',
    });
};

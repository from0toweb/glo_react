export default function validateInfo(values) {
    let errors = {};
    // телефон
    if (!values.phoneNumber.trim()) {
        errors.phoneNumber = 'Укажите телефон';
    } else if (!/^(\+7)?8?([-()]*\d){10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Укажите телефон в формате +7 999 999 99 99';
    }
    // город
    if (!values.city.trim()) {
        errors.city = 'Укажите город';
    }
    //улица
    if (!values.street.trim()) {
        errors.street = 'Укажите улицу';
    }
    // дом
    if (!values.house.trim()) {
        errors.house = 'Укажите дом';
    }

    return errors;
}

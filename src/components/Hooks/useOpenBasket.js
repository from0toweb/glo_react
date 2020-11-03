import { useState } from 'react';

export function useOpenBasket() {
    const [openBasket, setOpenBasket] = useState(false);
    return { openBasket, setOpenBasket };
}

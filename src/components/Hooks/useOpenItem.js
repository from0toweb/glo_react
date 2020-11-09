import { useState, useEffect } from 'react';

export function useOpenItem() {
    const [openItem, setOpenItem] = useState(null);

    useEffect(() => {
        document.title = openItem ? openItem.name : `MrDonald's`;
    }, [openItem]);
    return { openItem, setOpenItem };
}

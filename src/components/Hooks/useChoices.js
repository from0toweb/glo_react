import { useState } from 'react';

export function useChoices(openItem) {
    const [choice, setChoice] = useState(
        openItem.choice ? openItem.choice : null
    );

    function changeChoices(e) {
        setChoice(e.target.value);
    }

    return { choice, changeChoices };
}

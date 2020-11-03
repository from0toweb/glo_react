import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    width: 500px;
    column-count: 2;
    column-gap: 10px;
    flex-grow: 1;
`;
const ToppingLabel = styled.label`
    padding: 5px 0px;
    display: flex;

    align-items: center;
    cursor: pointer;
`;
const ToppingInput = styled.input`
    cursor: pointer;
    margin-right: 10px;
`;

export const Toppings = ({ toppings, checkedToppings }) => {
    return (
        <ToppingWrap>
            {toppings.map((item, i) => (
                <ToppingLabel key={i}>
                    <ToppingInput
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkedToppings(i)}
                    />
                    {item.name}
                </ToppingLabel>
            ))}
        </ToppingWrap>
    );
};

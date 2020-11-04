import React from 'react';
import styled from 'styled-components';
import check from '../../img/check.svg';

export const ToppingWrap = styled.div`
    width: 100%;
    column-count: 2;
    column-gap: 10px;
    flex-grow: 1;
    padding-top: 10px;
`;
export const ToppingLabel = styled.label`
    padding: 5px 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
`;
export const ToppingInput = styled.input`
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

export const CustomCheckBox = styled.span`
    width: 20px;
    height: 20px;
    border: 2px solid #1e235d;
    border-radius: 50%;
    background: url(${check}) no-repeat center center/65%
        ${({ checked }) => (checked ? `#1e235d ` : `#fff`)};
    transition: background 0.3s;
    margin-right: 10px;
`;

export const Toppings = ({ toppings, checkedToppings }) => {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingInput
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkedToppings(i)}
                        />
                        <CustomCheckBox checked={item.checked} />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    );
};

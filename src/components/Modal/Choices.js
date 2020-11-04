import React from 'react';
import styled from 'styled-components';
import {
    ToppingWrap,
    ToppingLabel,
    ToppingInput,
    CustomCheckBox,
} from './Toppings';

const ChoisesWrap = styled(ToppingWrap)``;
const ChoisesLabel = styled(ToppingLabel)``;
const ChoisesInput = styled(ToppingInput)``;

export const Choices = ({ choice, changeChoices, openItem }) => {
    return (
        <>
            <h3>Выберите</h3>
            <ChoisesWrap>
                {openItem.choices.map((item, i) => (
                    <ChoisesLabel key={i}>
                        <ChoisesInput
                            type="radio"
                            checked={item === choice}
                            value={item}
                            onChange={changeChoices}
                        />
                        <CustomCheckBox checked={item === choice} />
                        {item}
                    </ChoisesLabel>
                ))}
            </ChoisesWrap>
        </>
    );
};

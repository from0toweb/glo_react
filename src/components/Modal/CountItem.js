import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 70px;
    height: 100%;
    text-align: center;

    font-size: 18px;
    pointer-events: none;
    border-radius: 25px;
    border: 1px solid #ccc;
    margin: 0px 7px;
`;

const ButtonCount = styled.button`
    width: 35px;
    height: 35px;
    background-color: #cccccc94;
    border-radius: 50%;
    border: none;
`;
export function CountItem({ count, setCount, onChange }) {
    return (
        <CountWrapper>
            <div>
                <ButtonCount
                    disabled={count <= 1}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </ButtonCount>
                <CountInput
                    type="number"
                    min="1"
                    max="20"
                    value={count < 1 ? 1 : count}
                    onChange={onChange}
                />
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    );
}

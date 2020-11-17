import styled from 'styled-components';
import editIcon from '../../img/edit.svg';
import buttonIcon from '../../img/shopping-cart.svg';

export const BasketTitle = styled.h2`
    text-transform: uppercase;
    font-size: 39px;
    font-weight: normal;
`;
export const OrderTotal = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
export const TotalName = styled.span`
    flex-grow: 1;
`;
export const TotalCount = styled.span`
    margin-right: 30px;
`;
export const TotlalPrice = styled.span`
    margin-right: 14px;
    min-width: 99px;
    text-align: right;
`;
export const Modal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    overflow: scroll;
`;

export const ModalDialog = styled.div`
    max-width: 600px;
    min-height: 600px;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const PopupButton = styled.button`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 200px;
    padding: 15px 20px;
    border: none;
    outline: none;
    border-radius: 33px;
    filter: drop-shadow(0px 7px 16px rgba(30, 35, 93, 0.2));
    color: #fff;
    background-color: #1e235d;
    font-size: 19px;
    line-height: 22px;
    transition: all 0.5s;
    &:hover {
        filter: drop-shadow(0px 7px 20px rgba(30, 35, 93, 0.3));
        transition: all 0.5s;
        background-color: #151b5f;
    }
    &:disabled {
        background-color: #ccc;
    }
`;

export const ModalBaner = styled.div`
    width: 100%;
    height: 200px;
    background: url(${({ img }) => img}) no-repeat center center/cover;
`;

export const ButtonIcon = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: sub;
    background: url(${({ isEdit }) => (isEdit ? editIcon : buttonIcon)}) no-repeat center
        center/100%;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 20px 40px 40px;
    align-items: flex-start;
    @media (max-width: 490px) {
        padding: 15px 15px;
    }
`;

export const ModalTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const H3 = styled.h3`
    font-size: 30px;
    font-weight: normal;
    @media (max-width: 490px) {
        font-size: 28px;
    }
`;
export const Price = styled.span`
    font-family: Pacifico;
    font-size: 30px;
    @media (max-width: 490px) {
        font-size: 24px;
    }
`;

export const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 490px) {
        flex-direction: column;
    }
`;

import { styled } from '@utils';

export const ButtonContainer = styled.button`
    display: inline-block;
    outline: 0;
    cursor: pointer;
    text-align: center;
    border: 0;
    padding: 7px 16px;
    min-height: 36px;
    min-width: 36px;
    color: #ffffff;
    background: #008060;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
    :hover {
        background: #006e52;
    }
`;

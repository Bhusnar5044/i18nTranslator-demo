import { styled } from '@utils';

export const Select = styled.select`
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    display: grid;
    grid-template-areas: 'select';
    align-items: center;
    position: relative;

    &:after {
        content: '';
        width: 0.8em;
        height: 0.5em;
        background-color: var(--select-arrow);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        grid-area: select;
        justify-self: end;
    }

    &:focus + .focus {
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 2px solid var(--select-focus);
        border-radius: inherit;
    }
`;

export const Option = styled.option`
    padding: 0.5rem;
`;

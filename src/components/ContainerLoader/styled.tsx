import { keyframes, styled } from '@utils';

const logoSpin = keyframes`
   from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
`;
export const Loader = styled.img`
    width: 10rem;
    height: auto;
    margin: auto;
    animation: ${logoSpin} infinite 20s linear;
`;

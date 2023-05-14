import { FC, PropsWithChildren, memo } from 'react';
import { ButtonContainer } from './styled';
import { Props } from './types';

export const Button: FC<PropsWithChildren & Props> = memo(({ children, ...props }) => {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
});

Button.displayName = 'Button';
Button.defaultProps = {
    type: 'button',
};

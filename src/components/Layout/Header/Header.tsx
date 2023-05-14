import { SwitchLanguage } from '@components/SwitchLanguage/SwitchLanguage';
import { FC, memo } from 'react';
import { HeaderContainer, HeaderContent, Logo } from './Header.styled';

export const Header: FC = memo(() => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo src="/centime-logo.svg" />
                <SwitchLanguage />
            </HeaderContent>
        </HeaderContainer>
    );
});

Header.displayName = 'Header';

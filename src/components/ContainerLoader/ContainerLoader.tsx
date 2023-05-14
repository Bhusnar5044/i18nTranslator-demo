import { FC, memo } from 'react';
import { Loader } from './styled';

export const ContainerLoader: FC = memo(() => {
    return <Loader src="/reactLogo.svg" title="loader" />;
});

ContainerLoader.displayName = 'ContainerLoader';

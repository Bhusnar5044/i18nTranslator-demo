import ContainerLoader from '@components/ContainerLoader';
import About from '@pages/About';
import Home from '@pages/Home';
import { FC, Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';

export const Routes: FC = () => {
    return (
        <Suspense fallback={<ContainerLoader />}>
            <RoutesWrapper>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </RoutesWrapper>
        </Suspense>
    );
};

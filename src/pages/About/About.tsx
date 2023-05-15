import { PageContent } from '@components/Layout';
import { Text } from '@Lib';
import { FC, memo } from 'react';

export const About: FC = memo(() => {
    return (
        <PageContent>
            <Text textVariant="h3" translationRef="line3" />
        </PageContent>
    );
});

About.displayName = 'About';

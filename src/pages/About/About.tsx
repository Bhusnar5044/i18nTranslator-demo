import { PageContent } from '@components/Layout';
import { FC, memo } from 'react';

export const About: FC = memo(() => {
    return (
        <PageContent>
            <p>This is About Page</p>
        </PageContent>
    );
});

About.displayName = 'About';

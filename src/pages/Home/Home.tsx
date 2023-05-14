import { PageContent } from '@components/Layout';
import { Box } from '@components/Lib';
import { SalaryForm } from '@components/SalaryForm/SalaryForm';
import SankeyChart from '@components/SankeyChart';
import { FC, memo } from 'react';

export const Home: FC = memo(() => {
    return (
        <PageContent>
            <Box display="flex" flexDirection="column" gap="2rem" justifyContent="space-between">
                <SalaryForm />
                <SankeyChart />
            </Box>
        </PageContent>
    );
});

Home.displayName = 'Home';

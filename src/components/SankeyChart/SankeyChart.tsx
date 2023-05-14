import { Box, Text } from '@Lib';
import { useAppSelector } from '@store';
import { SalaryState } from '@store/salary';
import { theme } from '@theme';
import colors from '@theme/colors';
import { FC, memo } from 'react';
import { Chart } from 'react-google-charts';

export const options = {
    sankey: {
        link: { color: { fill: colors.success.light } },
        node: {
            label: { color: theme.colors.info.dark },
        },
    },
};

export const SankeyChart: FC = memo(() => {
    const {
        sankeyData: { links, nodes },
    } = useAppSelector((state) => state.salary) as SalaryState;
    const data = [['from', 'to', 'weight'], ...links.map((item) => Object.values(item))];
    return (
        <Box flexDirection="column">
            <Text textVariant="h3">Sankey Chart</Text>
            <Chart chartType="Sankey" width="100%" height="100vh" data={data} options={options} />
        </Box>
    );
});

SankeyChart.displayName = 'SankeyChart';

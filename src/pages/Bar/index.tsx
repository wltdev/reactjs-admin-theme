import { Box } from '@mui/material';

import { BarChart } from '@/components/Charts/BarChart';
import { Header } from '@/components/Header';
import { mockBarData } from '@/data/mockData';

const KEYS = ['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'];
export const Bar = () => {
    return (
        <Box m="50px 20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart data={mockBarData} keys={KEYS} />
            </Box>
        </Box>
    );
};

import { Box } from '@mui/material';

import { LineChart } from '@/components/Charts/LineChart';
import { Header } from '@/components/Header';
import { mockLineData } from '@/data/mockData';

export const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart data={mockLineData} />
            </Box>
        </Box>
    );
};

import { Box } from '@mui/material';

import { PieChart } from '@/components/Charts/PieChart';
import { Header } from '@/components/Header';
import { mockPieData } from '@/data/mockData';

export const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart data={mockPieData} />
            </Box>
        </Box>
    );
};

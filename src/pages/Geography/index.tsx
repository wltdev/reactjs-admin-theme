import { Box, useTheme } from '@mui/material';

import { GeographyChart } from '@/components/Charts/GeographyChart';
import { Header } from '@/components/Header';
import { mockGeographyData } from '@/data/mockData';
import { geoFeatures } from '@/data/mockGeoFeatures';
import { tokens } from '@/theme';

export const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="50px 20px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart data={mockGeographyData} geoFeatures={geoFeatures} />
            </Box>
        </Box>
    );
};

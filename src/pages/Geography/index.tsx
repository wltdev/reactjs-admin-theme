import { Box } from '@mui/material';

import { GeographyChart } from '@/components/Charts/GeographyChart';
import { Header } from '@/components/Header';
import { mockGeographyData } from '@/data/mockData';
import { geoFeatures } from '@/data/mockGeoFeatures';

export const Geography = () => {
    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box height="75vh">
                <GeographyChart data={mockGeographyData} geoFeatures={geoFeatures} />
            </Box>
        </Box>
    );
};

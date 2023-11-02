import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TrafficIcon from '@mui/icons-material/Traffic';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { BarChart } from '@/components/Charts/BarChart';
import { GeographyChart } from '@/components/Charts/GeographyChart';
import { LineChart } from '@/components/Charts/LineChart';
import { Header } from '@/components/Header';
import { ProgressCircle } from '@/components/ProgressCircle';
import { StatBox } from '@/components/StatBox';
import { mockTransactions } from '@/data/mockData';
import { tokens } from '@/theme';

export const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '10px 20px'
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: '10px' }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID AND CHARTS */}
        </Box>
    );
};

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TrafficIcon from '@mui/icons-material/Traffic';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { CButton } from '@/components/CButton';
import { BarChart } from '@/components/Charts/BarChart';
import { GeographyChart } from '@/components/Charts/GeographyChart';
import { LineChart } from '@/components/Charts/LineChart';
import { Header } from '@/components/Header';
import { ProgressCircle } from '@/components/ProgressCircle';
import { StatBox } from '@/components/StatBox';
import { mockBarData, mockGeographyData, mockLineData, mockTransactions } from '@/data/mockData';
import { geoFeatures } from '@/data/mockGeoFeatures';
import { tokens } from '@/theme';

const KEYS = ['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'];

export const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="50px 20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                <Box>
                    <CButton title="Download Reports" leftIcon={<DownloadOutlinedIcon />} />
                </Box>
            </Box>

            {/* GRID AND CHARTS */}

            <Box display={'grid'} gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/* ROW 1 */}
                <Box gridColumn="span 3" bgcolor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress={0.75}
                        increase="+75%"
                        icon={<EmailIcon sx={{ color: colors.grey[200], fontSize: '26px' }} />}
                    />
                </Box>

                <Box gridColumn="span 3" bgcolor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="431,361"
                        subtitle="Sales Obtained"
                        progress={0.5}
                        increase="+50%"
                        icon={<PointOfSaleIcon sx={{ color: colors.grey[100], fontSize: '26px' }} />}
                    />
                </Box>

                <Box gridColumn="span 3" bgcolor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="32,15"
                        subtitle="New Clientes"
                        progress={0.3}
                        increase="+30%"
                        icon={<PersonAddIcon sx={{ color: colors.grey[100], fontSize: '26px' }} />}
                    />
                </Box>

                <Box gridColumn="span 3" bgcolor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="1,352,361"
                        subtitle="Traffic Received"
                        progress={0.8}
                        increase="+80%"
                        icon={<TrafficIcon sx={{ color: colors.grey[100], fontSize: '26px' }} />}
                    />
                </Box>

                {/* ROW 2 */}

                <Box gridColumn="span 8" gridRow="span 2" bgcolor={colors.primary[400]}>
                    <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                                Revenue Generated
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.grey[200]}>
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.grey[100] }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} data={mockLineData} />
                    </Box>
                </Box>

                <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} overflow="auto">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography color={colors.blueAccent[400]} variant="h5" fontWeight="600">
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box sx={{ backgroundColor: colors.blueAccent[400] }} p="5px 10px" borderRadius="4px">
                                {transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} p="30px">
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                        <ProgressCircle size={125} progress={0.48} />
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]}>
                    <Typography variant="h5" fontWeight="600" sx={{ padding: '30px 30px 0 30px' }}>
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart data={mockBarData} isDashboard={true} keys={KEYS} />
                    </Box>
                </Box>
                <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} p="30px">
                    <Typography variant="h5" fontWeight="600" sx={{ marginBottom: '15px' }}>
                        Geography Based Traffic
                    </Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true} data={mockGeographyData} geoFeatures={geoFeatures} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

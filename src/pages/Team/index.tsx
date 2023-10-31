import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { mockDataTeam } from '@/data/mockData';
import { tokens } from '@/theme';

export const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px"></Box>;
};

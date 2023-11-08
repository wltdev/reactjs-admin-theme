import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Box, Typography, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { Header } from '@/components/Header';
import { Table } from '@/components/Table';
import { mockDataTeam } from '@/data/mockData';
import { tokens } from '@/theme';

export const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell'
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1
        },
        {
            field: 'access',
            headerName: 'Access Level',
            headerAlign: 'center',
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                        sx={{ backgroundColor: access === 'admin' ? colors.blueAccent[400] : colors.blueAccent[700] }}
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
                        {access === 'manager' && <SecurityOutlinedIcon />}
                        {access === 'user' && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                            {access}
                        </Typography>
                    </Box>
                );
            }
        }
    ];

    return (
        <Box m="50px 20px">
            <Header title="Team" subtitle="Managing the Team Members" />

            <Table rows={mockDataTeam} columns={columns} />
        </Box>
    );
};

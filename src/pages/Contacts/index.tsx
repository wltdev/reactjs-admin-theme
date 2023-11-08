import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Box, Typography, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { Header } from '@/components/Header';
import { Table } from '@/components/Table';
import { mockDataContacts } from '@/data/mockData';
import { tokens } from '@/theme';

export const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID' },
        { field: 'registerId', headerName: 'Register ID' },
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
            field: 'address',
            headerName: 'Address',
            flex: 1
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1
        },
        {
            field: 'zipCode',
            headerName: 'Zipcode',
            flex: 1
        }
    ];

    return (
        <Box m="50px 20px">
            <Header title="Contacts" subtitle="Managing the Contacts" />

            <Table rows={mockDataContacts} columns={columns} tollbar />
        </Box>
    );
};

import { Box, Typography, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { Header } from '@/components/Header';
import { Table } from '@/components/Table';
import { mockDataInvoices } from '@/data/mockData';
import { tokens } from '@/theme';

export const Invoices = () => {
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
            field: 'cost',
            headerName: 'Cost',
            flex: 1,
            renderCell: (params) => <Typography color={colors.greenAccent[500]}>$ {params.row.cost}</Typography>
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1
        }
    ];

    return (
        <Box m="50px 20px">
            <Header title="Invoices" subtitle="List of Invoices" />

            <Table rows={mockDataInvoices} columns={columns} tollbar checkboxSelection />
        </Box>
    );
};

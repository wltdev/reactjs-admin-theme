import { FC } from 'react';

import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

import { tokens } from '@/theme';

type Props = {
    rows: any[];
    columns: GridColDef[];
    tollbar?: boolean;
    checkboxSelection?: boolean;
};
export const Table: FC<Props> = ({ rows, columns, tollbar, checkboxSelection }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
                '& .MuiDataGrid-root': {
                    border: 'none'
                },
                '& .MuiDataGrid-cell': {
                    borderBottom: 'none'
                },
                '& .name-column--cell': {
                    color: colors.greenAccent[300]
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: colors.blueAccent[900],
                    borderBottom: 'none'
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: 'none',
                    backgroundColor: colors.primary[400]
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: `${colors.grey[100]} !important`
                },
                '& .MuiCheckbox-root': {
                    color: `${colors.greenAccent[200]} !important`
                }
            }}
        >
            <DataGrid
                checkboxSelection={checkboxSelection}
                rows={rows}
                columns={columns}
                slots={{ toolbar: tollbar ? GridToolbar : undefined }}
            />
        </Box>
    );
};

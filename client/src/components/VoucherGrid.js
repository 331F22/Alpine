import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button} from "@mui/material";


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'voucherCode',
        headerName: 'Voucher Code',
        width: 350,
        editable: true,
    },
    {
        field: 'dateAdded',
        headerName: 'Date Added',
        width: 350,
        editable: true,
    },


];

const rows = [
    { id: 1, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 2, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 3, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 4, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 5, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 6, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 7, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 8, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
    { id: 9, voucherCode: '23098s0df', dateAdded: '2022-12-01'},
];

export default function VoucherGrid() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Button variant="outlined">Import Vouchers</Button>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}
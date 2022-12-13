import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "./Vouchers.css"


const columns = [
    {   field: 'id',
        headerName: 'ID',
        width: 90 },
    {
        field: 'voucherCode',
        headerName: 'Voucher Code',
        width: 350,
        editable: false,
        headerAlign: "left"
    },
    {
        field: 'dateAdded',
        headerName: 'Date Added',
        width: 350,
        editable: true,
        headerAlign: 'left',
    },
    {
        field: "action",
        headerName: "Action",
        width: 350,
        headerAlign: 'left',
    }
];

//Currently, the data is hard coded. Backend was outside of my goal.
const rows = [
    { id: 1, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: <AddIcon/>},
    { id: 2, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 3, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 4, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 5, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 6, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 7, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 8, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
    { id: 9, voucherCode: '23098s0df', dateAdded: '2022-12-01', action: "Assign Voucher"},
];

//This is the grid component that the voucher will be housed in.

export default function VoucherGrid() {



    return (

        <Box sx={{ height: 400, width: '100%', bgcolor: "white"}}>

            {/*Button that will ideally add more vouchers. Currently only notifies
            the user vouchers are bing added*/}

            <Button variant="outlined"
                    color={"success"}
                    onClick={() => {
                        alert('New vouchers added!');
                    }}>
                Import Vouchers
            </Button>


            {/*Table that shows the vouchers and the date it was added
            1. in row editing is ideally not allowed but shows the capability of the grid
            2. Sorting options based on date and voucher code (unnecessary for voucher code but you never know)
            3. Multiple select option for assign vouchers in bulk or can be sent individually
            4. Paging so that the hundreds of vouchers don't show up at once. currently set to 5
            */}

            <h2>Vouchers Table</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                onSelectionModelChange={(id) =>{
                    {/*Allows for changing the data.*/}
                }}
                sx={{m:2, bgcolor: "rgb(237, 234, 233  )"}}

            />



        </Box>
    );
}
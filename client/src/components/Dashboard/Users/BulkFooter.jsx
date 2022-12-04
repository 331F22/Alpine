import { IconButton, Tooltip } from "@mui/material";
import { GridFooter, GridFooterContainer, useGridApiContext } from "@mui/x-data-grid"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import "./Users.css"

const BulkFooter = (props) => {
    const gridRef = useGridApiContext();

    const handleDeleteSelected = () => {
        const selectedIDs = Array.from(gridRef.current.getSelectedRows().keys());

        props?.handleDelete(selectedIDs)();
    }

    return(
        <div>
            <GridFooterContainer>
                {gridRef.current.getSelectedRows().size > 0 ? 
                    <div className="usersTableBulkOperationsContainer">
                        <p className="usersTableBulkOperationsLabel">Bulk Operations</p>
                        <Tooltip title={"Send Vouchers to Selected"}>
                            <IconButton>
                                <SendIcon />
                            </IconButton>    
                        </Tooltip>
                        <Tooltip title={"Remove Selected"}>
                            <IconButton onClick={handleDeleteSelected}>
                                <DeleteIcon />
                            </IconButton>    
                        </Tooltip>
                    </div> 
                    : <div></div> }

                <GridFooter />
            </GridFooterContainer>
        </div>
    )
}

export default BulkFooter
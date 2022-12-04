import { IconButton, Tooltip } from "@mui/material";
import { GridFooter, GridFooterContainer, useGridApiContext } from "@mui/x-data-grid"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import "./Volunteers.css"

/**
 * Custom dataGrid footer component that includes buttons for bulk operations
 * @param {*} props 
 */
const BulkFooter = (props) => {
    // Reference to the grid API context (for interfacing with the grid component)
    const gridRef = useGridApiContext();

    // Callback for deleting selected entries from the database
    const handleDeleteSelected = () => {
        // Get selected entry IDs
        const selectedIDs = Array.from(gridRef.current.getSelectedRows().keys());

        // Pass the IDs to the 'handleDelete' callback from the Volunteers component
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
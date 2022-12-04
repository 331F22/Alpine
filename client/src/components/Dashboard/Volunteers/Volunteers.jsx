import { React, useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import "./Volunteers.css"
import DashboardContainer from "../DashboardContainer/DashboardContainer";

import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import BulkFooter from "./BulkFooter";

/**
 * Table to display volunteer data, offering access to aggregation/downselection, individual
 * entry mutation, and bulk operations
 */
const Volunteers = () => {
    // State for volunteer entries
    const [entryList, setEntryList] = useState([]);

    // State for the row modes in the table (whether the row is being edited or viewed)
    const [rowModesModel, setRowModesModel] = useState({});

    // Column definitions for the table
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'first_name',
            headerName: 'First Name',
            width: 150,
            editable: true
        },
        {
            field: 'last_name',
            headerName: 'Last Name',
            width: 150,
            editable: true
        },
        {
            field: 'email_address',
            headerName: 'Email',
            flex: 1,
            minWidth: 200,
            editable: true
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            width: 200,
            // Callback that is used to display action items in the table
            getActions: ({ id }) => {
                const isEditing = rowModesModel[id]?.mode === GridRowModes.Edit;

                // If the row is currently being edited, replace the buttons with save/cancel icons
                if (isEditing) {
                    return [
                        <GridActionsCellItem icon={<DoneIcon />} label={"Save"} onClick={handleEditSave(id)} />,
                        <GridActionsCellItem icon={<CloseIcon />} label={"Cancel"} onClick={handleEditCancel(id)} />,
                    ]
                } else {
                    // Otherwise, expose the edit/save/delete icons
                    return [
                        <GridActionsCellItem icon={<EditIcon />} label={"Edit"} onClick={handleEdit(id)} />,
                        <GridActionsCellItem icon={<SendIcon />} label={"Send"} />,
                        <GridActionsCellItem icon={<DeleteIcon />} label={"Delete"} onClick={handleDelete(id)} />
                    ]
                }
            }
        }
    ];

    // callback to start the entry editing process
    const handleEditStart = (params, evt) => {
        evt.defaultMuiPrevented = true;
    }

    // callback to stop the entry editing process
    const handleEditStop = (params, evt) => {
        evt.defaultMuiPrevented = true;
    }

    // Note, the following callbacks return functions. This is because the MUI dataGrid component
    // expects to receive functions (see MUI dataGrid documentation for details: https://mui.com/x/react-data-grid/)

    // callback to handle editing an entry in the table
    const handleEdit = (volunteerID) => () => {
        // Set the editing state to 'edit' for the current entry
        setRowModesModel({ ...rowModesModel, [volunteerID]: { mode: GridRowModes.Edit } });
    }

    // callback to saving an edit an entry in the table
    const handleEditSave = (volunteerID) => () => {
        // Set the editing state to 'view' for the current entry
        setRowModesModel({ ...rowModesModel, [volunteerID]: { mode: GridRowModes.View } });
    }

    // callback to canceling an edit an entry in the table
    const handleEditCancel = (volunteerID) => () => {
        // Set the editing state to 'view' for the current entry and reset the modifications
        setRowModesModel({ ...rowModesModel, [volunteerID]: { mode: GridRowModes.View, ignoreModifications: true } });
    }

    // Callback for saving the updated entry to the database
    const handleSave = (updatedEntry) => {
        // Hit the update route
        axios.put(`${process.env.REACT_APP_HOST}/api/update`, { volunteer: updatedEntry })
        
        // Update the entries list
        setEntryList(entryList.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry)))
        return updatedEntry
    }

    // Callback to handle sending a voucher email (this will be implemented by another group)
    const handleSend = (volunteerID) => {
        alert("TODO: Integrate with with another group")
    }

    // Callback for deleting an entry from the database
    const handleDelete = (volunteerID) => () => {
        // Ensure id(s) are stored in an array
        if (!Array.isArray(volunteerID)) volunteerID = [volunteerID];

        // Hit the delete route with the list of IDs to remove
        axios.delete(`${process.env.REACT_APP_HOST}/api/delete`, { data: { volunteers: volunteerID } }).then(() => {
            setEntryList(entryList.filter((entry) => !volunteerID.includes(entry.id)))
        }).catch()
    }

    useEffect(() => {
        // Fetch initial entry data from volunteers table
        axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
            console.log(response.data);
            setEntryList(response.data)
        })
    }, [])

    return (
        <DashboardContainer title={"Volunteers"}>
            <div className="tableContainer">
                <DataGrid
                    rows={entryList}
                    columns={columns}
                    editMode={"row"}
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
                    onRowEditStart={handleEditStart}
                    onRowEditStop={handleEditStop}
                    processRowUpdate={handleSave}
                    experimentalFeatures={{ newEditingApi: true }}
                    checkboxSelection
                    rowsPerPageOptions={[25, 50, 75, 100]}
                    initialState={{
                        pagination: {
                            pageSize: 25
                        }
                    }}
                    components={{
                        Footer: BulkFooter
                    }}
                    componentsProps={{
                        footer: { handleDelete }
                    }}
                />
            </div>
        </DashboardContainer>
    )
}

export default Volunteers;
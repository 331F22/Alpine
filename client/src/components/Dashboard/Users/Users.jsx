import { React, useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import "./Users.css"
import DashboardContainer from "../DashboardContainer/DashboardContainer";

import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import BulkFooter from "./BulkFooter";

const Users = () => {
    const [entryList, setEntryList] = useState([]);
    const [rowModesModel, setRowModesModel] = useState({});

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
            getActions: ({ id }) => {
                const isEditing = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isEditing) {
                    return [
                        <GridActionsCellItem icon={<DoneIcon />} label={"Save"} onClick={handleEditSave(id)} />,
                        <GridActionsCellItem icon={<CloseIcon />} label={"Cancel"} onClick={handleEditCancel(id)} />,
                    ]
                } else {
                    return [
                        <GridActionsCellItem icon={<EditIcon />} label={"Edit"} onClick={handleEdit(id)} />,
                        <GridActionsCellItem icon={<SendIcon />} label={"Send"} />,
                        <GridActionsCellItem icon={<DeleteIcon />} label={"Delete"} onClick={handleDelete(id)} />
                    ]
                }
            }
        }
    ];

    const handleEditStart = (params, evt) => {
        evt.defaultMuiPrevented = true;
    }

    const handleEditStop = (params, evt) => {
        evt.defaultMuiPrevented = true;
    }

    const handleEdit = (volunteerID) => () => {
        console.log(rowModesModel);
        console.log(volunteerID);
        setRowModesModel({ ...rowModesModel, [volunteerID]: { mode: GridRowModes.Edit } });
    }

    const handleEditSave = (volunteerID) => () => {
        setRowModesModel({ ...rowModesModel, [volunteerID]: { mode: GridRowModes.View } });
    }

    const handleEditCancel = (volunteerID) => () => {
        setRowModesModel({ ...rowModesModel, [volunteerID]: { mode: GridRowModes.View, ignoreModifications: true } });
    }

    const handleSave = (updatedEntry) => {
        axios.put(`${process.env.REACT_APP_HOST}/api/update`, { volunteer: updatedEntry })
        console.log(updatedEntry);
        setEntryList(entryList.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry)))
        return updatedEntry
    }

    const handleSend = (volunteerID) => {
        alert("TODO: Integrate with with another group")
    }

    const handleDelete = (volunteerID) => () => {
        if (!Array.isArray(volunteerID)) volunteerID = [volunteerID];

        axios.delete(`${process.env.REACT_APP_HOST}/api/delete`, { data: { volunteers: volunteerID } }).then(() => {
            setEntryList(entryList.filter((entry) => !volunteerID.includes(entry.id)))
        }).catch()
    }

    useEffect(() => {
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

export default Users;
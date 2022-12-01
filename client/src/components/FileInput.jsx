import { useRef } from 'react';
import axios from "axios";
import { useDropzone } from 'react-dropzone';

// TODO: Drag and drop functionality for component

const FileInput = () => {
    const fileInputRef = useRef(null);
    const {getRootProps, getInputProps} = useDropzone();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("ticket_sheet", fileInputRef.current.files[0]);
        const url = `${process.env.REACT_APP_HOST}/api/ticket_sheet`;
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        const response = await axios.post(url, formData, config);
        console.log(response.data);
    };

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label>Upload ticket spreadsheet:</label>
            <input
                type="file"
                ref={fileInputRef}
                accept=".xlsx"
                multiple
            />
            <input type="submit" value="Upload File(s)"/>
        </form>
    );
};

export default FileInput;
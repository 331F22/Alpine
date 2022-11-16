import { useRef } from 'react';
import axios from "axios";

// TODO: Drag and drop functionality for component

const FileInput = () => {
    const fileInputRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", fileInputRef.current);
        const url = "";
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        const response = await axios.post(url, formData, config);
        console.log(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload ticket spreadsheet:
                <input
                    type="file"
                    ref={fileInputRef}
                    accept=".xlsx"
                />
                <input type="submit" value="Upload File"/>
            </label>
        </form>
    );
};

export default FileInput;
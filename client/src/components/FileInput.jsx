import { useRef, useState } from 'react';
import axios from "axios";

const FileInput = () => {
    const fileInputRef = useRef(null);
    const fileRef = useRef(null);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [canUpload, setCanUpload] = useState(false);
    const [uploadFail, setUploadFail] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUploadFail(false);
        setCanUpload(false);
        const formData = new FormData();
        formData.append("ticket_sheet", fileRef.current);
        const url = `${process.env.REACT_APP_HOST}/api/ticket_sheet`;
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        axios.post(url, formData, config).then((res) => {
            setCanUpload(true);
            fileInputRef.current.value = null;
            fileRef.current = null;
            setFileUploaded(true);
        }).catch((err) => {
            setCanUpload(true);
            setUploadFail(true);
            console.log(err);
        })
    };

    const handleFileChange = (e) => {
        fileRef.current = e.target.files[0];
        setCanUpload(!!fileInputRef.current);
        setFileUploaded(false);
        setUploadFail(false);
    }

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label>Upload ticket spreadsheet:</label>
            <input
                type="file"
                ref={fileInputRef}
                accept=".xlsx,.csv"
                onChange={handleFileChange}
            />
            <input type="submit" value="Upload File(s)" disabled={!canUpload}/>
            {fileUploaded && (<p>Uploaded!</p>)}
            {uploadFail && (<p>Uh oh! Something on the server side didn't work.</p>)}
        </form>
    );
};

export default FileInput;
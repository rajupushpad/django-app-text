// frontend/src/components/FileUpload.js
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [fileText, setFileText] = useState('');
    const [option, setOption] = useState(''); // To store the selected option
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        setLoading(true)
        try {
            let response = await axios.post('http://http://51.20.138.213/converter/change-video-to-audio/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (response.data) {
                setFileText(response.data.resText)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error:', error);
        }
    };

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, [])

    return (
        <div>
            <div className="file-upload-container">
                <Dropzone onDrop={onDrop} multiple={false} accept=".mp4, .mp3, .wav, .avi">
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                {file && file.name ? (
                                    <div className="selected-file">
                                        {file && file.name}
                                    </div>
                                ) : (
                                    'Drag and drop file here, or click to select file'
                                )}
                            </div>
                            <aside className="selected-file-wrapper">
                                <button
                                    className="btn btn-success"
                                    disabled={!file || loading}
                                    onClick={handleUpload}
                                >
                                    {
                                        loading ? 'uploading and extracting text...' : 'Upload and extract text'
                                    }
                                </button>
                            </aside>
                        </section>
                    )}
                </Dropzone>
            </div>

            {fileText.length > 0 &&
                <div style={{ marginTop: 50 }}>
                    <h3>Extracted content from video/audio:</h3>
                    <div className="result-container">
                        <div>
                            {fileText}
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default FileUpload;
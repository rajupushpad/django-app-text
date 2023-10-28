import React, { useState, useCallback } from 'react';
import Dropzone from 'react-dropzone';

function ExtractAudio() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('myFile');
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        setLoading(true)
        try {

            const response = await fetch('http://localhost:8000//converter/extract-audio-from-video/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName + '.mp3';
                a.click();
            }
            setLoading(false);
            setFile(null);

        } catch (error) {
            setLoading(false)
            console.error('Error:', error);
        }
    };

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
        try {
            setFileName(acceptedFiles[0].name.split('.')[0]);
        } catch (e) { }
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
                                        loading ? 'uploading and extracting audio...' : 'Upload and extract audio'
                                    }
                                </button>
                            </aside>
                        </section>
                    )}
                </Dropzone>
            </div>
        </div>
    );
}

export default ExtractAudio;
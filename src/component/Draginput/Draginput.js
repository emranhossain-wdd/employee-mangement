import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { parse } from 'papaparse';


const Draginput = () => {
    const [file, setFile] = useState([])
    const addEmployees = (data) => {
        // console.log(data);
        fetch('http://localhost:5000/addEmployees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.affectedRows) {
                    alert('Employee Added Successfully')
                    setFile([])
                }
            })
    }
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(async file => {
            const text = await file.text();
            const result = parse(text)
            setFile(existing => [...existing, ...result.data]);
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <>
            <div className='border m-4 p-5 ms-0' style={{ cursor: 'pointer' }} {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop .csv files here, or click to select files</p>
                }
            </div>
            <div className='pb-3'>
                {file.map((info, i) => <li className='gx-1' key={i}>{info}</li>)}
            </div>
            {file.length !== 0 && <button className='bg-success text-white rounded-3 mb-3 p-1' onClick={() => addEmployees(file)}>Add All Employees</button>}
        </>
    );
};

export default Draginput;
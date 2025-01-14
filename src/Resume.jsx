import React, { useState } from 'react';

function Resume() {
    const [grantAccess, setGrantAccess] = useState(false);
    const [resumeFileUrl, setResumeFileUrl] = useState('https://drive.google.com/file/d/117KAqNlhDLCHq61laI7Ws10PyXZaY4sE/view?usp=sharing');

    const updateClicked = () => {
        const code = prompt("Enter code: ");
        if (parseInt(code) === 4327) setGrantAccess(true);
        else alert("Not you buddy!");
    };

    const doneUpdate = () => {
        const fileInput = document.querySelector('input[type="file"]')
        if(fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const fileUrl = URL.createObjectURL(file)
            setResumeFileUrl(fileUrl);
            alert("Done!,", fileUrl);
            setGrantAccess(false)
        } else {
            alert("Not uploaded!")
        }
    };


    return (
        <div className='bai-semibold mt-10 text-center flex items-center flex-col'>
            <h1 className='text-2xl bai-bold'>Resume</h1>
            <div className='flex gap-3 mt-3 text-blue-500'>
                <a 
                    href=   {resumeFileUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`underline cursor-${resumeFileUrl ? 'grab' : 'not-allowed'}`}
                >
                    View
                </a>
                <span>|</span>
                <a className='underline cursor-grab' onClick={updateClicked}>Update</a> <span>|</span>
                <a download={true} href='https://docs.google.com/document/d/1vyIIiyijrgVMWe-MAUHBnI3nYl6nkf6d/export?format=docx' className='underline cursor-grab'>Format</a> 
            </div>
            {grantAccess && (
                <div className='flex flex-col'>
                    <input type="file" className='ml-[6rem] mt-3' />
                    <button className='mt-3 text-blue-700' onClick={doneUpdate}>Done</button>
                </div>
            )}
        </div>
    );
}

export default Resume;

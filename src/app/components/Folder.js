"use client"; 

import File from './File'
import { useState } from 'react';

const Folder = ({ folder, onSelectFile, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleFolderSelect = (folder) => {
        onSelect(folder);
        // console.log(folder);
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="cursor-pointer" onClick={() => handleFolderSelect(folder)}>
                {isOpen ? '📂' : '📁'} {folder.name}
            </div>
            {isOpen && (
                <div className="pl-4">
                    {folder.files.map((file, index) => (
                        <File key={index} file={file} onSelect={onSelectFile} />
                    ))}
                    {folder.folders.map((subFolder, index) => (
                        <Folder 
                            key={index} 
                            folder={subFolder} 
                            onSelectFile={onSelectFile} 
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Folder;

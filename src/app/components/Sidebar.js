"use client"; 

import Folder from './Folder'
import { FaFolderPlus, FaFileMedical } from "react-icons/fa";
import { useState } from 'react';

const Sidebar = ({ structure, onSelectFile, onAddFile, onAddFolder }) => {
    const [showFileInput, setShowFileInput] = useState(false);
    const [showFolderInput, setShowFolderInput] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const [newFolderName, setNewFolderName] = useState('');

    const handleAddFile = () => {
        if (newFileName) {
            onAddFile(newFileName);
            setNewFileName('');
            setShowFileInput(false);
        }
    };

    const handleAddFolder = () => {
        if (newFolderName) {
            onAddFolder(newFolderName);
            setNewFolderName('');
            setShowFolderInput(false);
        }
    };

    return (
    <div className="h-screen bg-gray-900">
        <div className="bg-blue-500">
            <div className='flex justify-between py-3'>
                <div className='px-2'>
                    <text className='text-xl'>
                        Workspace
                    </text>
                </div>
                <div className="flex">
                    <div className="">
                        <button onClick={() => {
                            setShowFileInput(!showFileInput);
                            setShowFolderInput(false);
                        }}>
                            <FaFileMedical size={20}/>
                        </button>
                    </div>
                    <div className="px-5">
                        <button onClick={() => {
                            setShowFolderInput(!showFolderInput);
                            setShowFileInput(false);
                        }}>
                            <FaFolderPlus size={23} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {showFileInput && (
            <div className="flex justify-between px-5">
                <div className="w-3/4">
                    <input
                    type="text"
                    className='w-full p-1 text-black'
                    placeholder="Enter file name"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    />
                </div>
                <div className="w-1/4">
                    <button className="w-full bg-blue-500 h-full" onClick={handleAddFile}>add</button>
                </div>
            </div>
        )}
        {showFolderInput && (
            <div className="flex justify-between px-5">
                <div className="w-3/4">
                    <input
                    type="text"
                    className='w-full p-1 text-black'
                    placeholder="Enter folder name"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    />
                </div>
                <div className="w-1/4">
                    <button className="w-full bg-blue-500 h-full" onClick={handleAddFolder}>add</button>
                </div>
            </div>
        )}
        <div className="px-5 py-2">
            {structure.map((folder, index) => (
                <Folder key={index} folder={folder} onSelect={onSelectFile} />
            ))}
        </div>
    </div>
  )
}

export default Sidebar

"use client"; 

import Folder from './Folder'
import { FaFolderPlus, FaFileMedical } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';

const Sidebar = ({ structure, onSelectFile, onSelectFolder,  onAddFile, onAddFolder }) => {
    const [showFileInput, setShowFileInput] = useState(false);
    const [showFolderInput, setShowFolderInput] = useState(false);
    const [newFileName, setNewFileName] = useState('');
    const [newFolderName, setNewFolderName] = useState('');
    const fileInputRef = useRef(null);
    const folderInputRef = useRef(null);

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

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setShowFileInput(false);
                setShowFolderInput(false);
            }
        };
        const handleClickOutside = (e) => {
            if (fileInputRef.current && !fileInputRef.current.contains(e.target)) {
                setShowFileInput(false);
            }
            if (folderInputRef.current && !folderInputRef.current.contains(e.target)) {
                setShowFolderInput(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
    <div className="bg-gray-900 h-full">
        <div className="bg-blue-500">
            <div className='flex justify-between py-3'>
                <div className='px-2'>
                    <text className='text-xl'>
                        Workspace
                    </text>
                </div>
                <div className="flex">
                    <div className="hover:text-blue-900">
                        <button onClick={() => {
                            setShowFileInput(!showFileInput);
                            setShowFolderInput(false);
                        }}>
                            <FaFileMedical size={20}/>
                        </button>
                    </div>
                    <div className="px-5 hover:text-blue-900">
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
            <div className="flex justify-between px-5 py-2" ref={fileInputRef}>
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
            <div className="flex justify-between px-5 py-2" ref={folderInputRef}>
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
                <Folder key={index} folder={folder} onSelectFile={onSelectFile} onSelect={onSelectFolder} />
            ))}
        </div>
    </div>
  )
}

export default Sidebar;

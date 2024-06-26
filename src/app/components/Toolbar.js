"use client";

import { useState, useEffect, useRef } from "react";

const Toolbar = ({selectedFile, onSave}) => {
    const [isFileDropdown, setIsFileDropdown] = useState(false);
    const [isEditDropdown, setIsEditDropdown] = useState(false);
    const fileDropdownRef = useRef(null);
    const editDropdownRef = useRef(null);

    const toggleFileDropdown = () => {
        setIsFileDropdown(!isFileDropdown);
        setIsEditDropdown(false);
    };

    const toggleEditDropdown = () => {
        setIsEditDropdown(!isEditDropdown);
        setIsFileDropdown(false);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsFileDropdown(false);
                setIsEditDropdown(false);
            }
        }
        const handleClickOutside = (e) => {
            if (fileDropdownRef.current && !fileDropdownRef.current.contains(e.target)) {
                setIsFileDropdown(false);
            }
            if (editDropdownRef.current && !editDropdownRef.current.contains(e.target)) {
                setIsEditDropdown(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-zinc-900">
            <div className="flex p-2">
                <div className="px-1">
                    <button className="hover:bg-gray-500 py-1 px-2 rounded-md" onClick={toggleFileDropdown}>File</button>
                    {
                        isFileDropdown && (
                            <div className="absolute left-5 mt-2 w-56 bg-gray-900 shadow-lg" ref={fileDropdownRef}>
                                <ul>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">New File</li>
                                    </div>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">New Folder</li>
                                    </div>
                                    <hr />
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Open File</li>
                                    </div>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Open Folder</li>
                                    </div>
                                    <hr />
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Save</li>
                                    </div>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Save As...</li>
                                    </div>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className="px-1">
                    <button className="hover:bg-gray-500 py-1 px-2 rounded-md" onClick={toggleEditDropdown}>Edit</button>
                    {
                        isEditDropdown && (
                            <div className="absolute left-15 mt-2 w-56 bg-gray-900 shadow-lg" ref={editDropdownRef}>
                                <ul>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Undo</li>
                                    </div>
                                    <hr />
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Cut</li>
                                    </div>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Copy</li>
                                    </div>
                                    <div className="py-2 px-1">
                                        <li className="p-2 hover:bg-slate-200 hover:text-black cursor-pointer border border-transparent rounded-sm">Paste</li>
                                    </div>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className="px-1">
                    <button className="hover:bg-gray-500 py-1 px-2 rounded-md" onClick={() => {
                        if (selectedFile) {
                            onSave(selectedFile.name, selectedFile.content);
                        }
                        }}>Save</button>
                </div>
                <div className="px-1">
                    <button className="hover:bg-gray-500 py-1 px-2 rounded-md">Switch</button>
                </div>
                <div className="px-1">
                    <button className="hover:bg-gray-500 py-1 px-2 rounded-md">Exit</button>
                </div>
            </div>
        </div>
    );
};


export default Toolbar;
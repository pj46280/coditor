"use client";

import { useState } from "react";

const Toolbar = ({selectedFile, onSave}) => {
    const [isFileDropdown, setIsFileDropdown] = useState(false);
    const [isEditDropdown, setIsEditDropdown] = useState(false);
    const toggleFileDropdown = () => {
        setIsFileDropdown(!isFileDropdown);
        setIsEditDropdown(false);
    };
    const toggleEditDropdown = () => {
        setIsEditDropdown(!isEditDropdown);
        setIsFileDropdown(false);
    };
    return (
        <div className="bg-zinc-900">
            <div className="flex p-2">
                <div className="px-3">
                    <button onClick={toggleFileDropdown}>File</button>
                    {
                        isFileDropdown && (
                            <div className="absolute left-5 mt-2 w-56 bg-gray-900 shadow-lg">
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
                <div className="px-3">
                    <button onClick={toggleEditDropdown}>Edit</button>
                    {
                        isEditDropdown && (
                            <div className="absolute left-15 mt-2 w-56 bg-gray-900 shadow-lg">
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
                <div className="px-3">
                    <button onClick={() => onSave(selectedFile.name, selectedFile.content)}>Save</button>
                </div>
                <div className="px-3">
                    <button>Switch</button>
                </div>
                <div className="px-3">
                    <button>Exit</button>
                </div>
            </div>
        </div>
    );
};


export default Toolbar;
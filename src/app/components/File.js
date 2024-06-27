"use client";

import { extensions } from "../config";

const File = ({ file, onSelect }) => {

    const fileExtension = file.extension;
    const symbol = extensions[fileExtension].logo;

    return (
        <div className="flex cursor-pointer" onClick={() => {
            onSelect(file);
        }}>
            <div className="px-2 py-1">
                {symbol} 
            </div>
            <div>
                {file.name}
            </div>
        </div>
    )
}

export default File

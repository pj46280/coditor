"use client";

import { extensions } from "../config";

const File = ({ file, onSelect }) => {

    const fileExtension = file.extension;
    const symbol = extensions[fileExtension].logo;

    return (
        <div className="flex cursor-pointer w-1/2" onClick={() => {
            onSelect(file);
        }}>
            <div className="px-2 py-1">
                {symbol} 
            </div>
            {
                fileExtension === "c" ? (
                    <div className="px-1">
                        {file.name}
                    </div>
                ) : (
                    <div>
                        {file.name}
                    </div>
                )
            }
        </div>
    )
}

export default File

"use client";

const Toolbar = ({selectedFile, onSave}) => {
    return (
        <div className="bg-zinc-900">
            <div className="flex p-2">
                <div className="px-2">
                    <button>File</button>
                </div>
                <div className="px-2">
                    <button>Edit</button>
                </div>
                <div className="px-2">
                    <button onClick={() => onSave(selectedFile.name, selectedFile.content)}>Save</button>
                </div>
                <div className="px-2">
                    <button>Switch</button>
                </div>
                <div className="px-2">
                    <button>Exit</button>
                </div>
            </div>
        </div>
    );
};


export default Toolbar;
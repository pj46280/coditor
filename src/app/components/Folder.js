"use client"; 

import File from './File'
import { useState } from 'react';

const Folder = ({ folder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '📂' : '📁'} {folder.name}
      </div>
      {isOpen && (
        <div className="pl-4">
          {folder.files.map((file, index) => (
            <File key={index} file={file} onSelect={onSelect} />
          ))}
          {folder.folders.map((subFolder, index) => (
            <Folder key={index} folder={subFolder} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Folder

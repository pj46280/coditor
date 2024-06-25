"use client";

import Sidebar from './components/Sidebar';
import CustomEditor from './components/Editor';
import Toolbar from './components/Toolbar';
import { useState } from 'react';

const initialStructure = [
  {
    name: "folder",
    folders: [],
    files: [
      { name: "file.txt", extension: "txt", content: "Hello 👋" },
    ]
  }
];

const updateFileContent = (structure, fileName, newContent) => {
  for (let item of structure) {
    if (item.files) {
      for (let file of item.files) {
        if (file.name === fileName) {
          file.content = newContent
          return;
        }
      }
    }
    if (item.folders) {
      updateFileContent(item.folders, fileName, newContent);
    }
  }
};

const jumpToFolder = (structure, selectedFolder, fileName, isFolder) => {
  for (let item of structure) {
    if (item.name === selectedFolder) {
      if (isFolder) {
        item.folders.push({name: fileName, folders: [], files: []});
        return;
      } else {
        item.files.push({name: fileName, extension: fileName.split('.').pop(), content: ''});
        return;
      }
    }
    if (item.folders) {
      jumpToFolder(item.folders, selectedFolder, fileName, isFolder);
    }
  }
};

export default function Home() {
  const [structure, setStructure] = useState(initialStructure);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // useEffect(() => {
  //   console.log('home: ', structure);
  // }, [structure]);

  const handleFileSave = (fileName, newContent) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    updateFileContent(newStructure, fileName, newContent);
    setStructure(newStructure);
  };

  const handleAddFile = (fileName) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    //newStructure[0].files.push({name: fileName, extension: fileName.split('.').pop(), content: ''});
    jumpToFolder(newStructure, selectedFolder.name, fileName, false);
    setStructure(newStructure);
  };

  const handleAddFolder = (folderName) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    // newStructure[0].folders.push({name: folderName, folders: [], files: []});
    jumpToFolder(newStructure, selectedFolder.name, folderName, true);
    setStructure(newStructure);
  };

  return (
    <div>
      <div className="flex flex-col h-screen">
        <Toolbar selectedFile={selectedFile} onSave={handleFileSave} />
        <div className="flex flex-1">
          <div className="w-1/5">
            <Sidebar 
              structure={structure} 
              onSelectFile={setSelectedFile} 
              onSelectFolder={setSelectedFolder}
              onAddFile={handleAddFile} 
              onAddFolder={handleAddFolder} 
            />
          </div>
          <div className="w-4/5">
            <CustomEditor file={selectedFile} />
          </div>
        </div>
      </div>
    </div>
  );
}

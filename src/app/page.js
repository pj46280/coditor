"use client";

import Sidebar from './components/Sidebar';
import CustomEditor from './components/Editor';
import Toolbar from './components/Toolbar';
import { useEffect, useState } from 'react';

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
  const [structure, setStructure] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getStructure');
        const data = await response.json();
        setStructure(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const saveStructure = async () => {
      try {
        await fetch('/api/updateStructure', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(structure)
        });
      } catch (error) {
        console.error(error);
      }
    };
    if (structure.length > 0) {
      saveStructure();
    }
  }, [structure]);

  const handleFileSave = (fileName, newContent) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    updateFileContent(newStructure, fileName, newContent);
    setStructure(newStructure);
  };

  const handleAddFile = (fileName) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    jumpToFolder(newStructure, selectedFolder.name, fileName, false);
    setStructure(newStructure);
  };

  const handleAddFolder = (folderName) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
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
            <CustomEditor file={selectedFile} onFileSave={handleFileSave} />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Sidebar from './components/Sidebar';
import CustomEditor from './components/Editor';
import Toolbar from './components/Toolbar';
import { useState } from 'react';

const initialStructure = [
  {
    name: 'src',
    folders: [
      {
        name: 'components',
        folders: [],
        files: [{ name: 'Header.js', extension: 'js', content: 'export default function Header() {}' }]
      }
    ],
    files: [
      { name: 'index.js', extension: 'js', content: 'console.log("Hello, world!")' },
      { name: 'styles.css', extension: 'css', content: 'body { margin: 0; }' }
    ]
  },
  {
    name: 'public',
    folders: [],
    files: [
      { name: 'index.html', extension: 'html', content: '<html><body>Hello, world!</body></html>' }
    ]
  }
]

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

export default function Home() {
  const [structure, setStructure] = useState(initialStructure);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSave = (fileName, newContent) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    updateFileContent(newStructure, fileName, newContent);
    setStructure(newStructure);
    console.log(structure);
  };

  const handleAddFile = (fileName) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    newStructure[0].files.push({name: fileName, extension: fileName.split('.').pop(), content: ''});
    setStructure(newStructure);
  };

  const handleAddFolder = (folderName) => {
    const newStructure = JSON.parse(JSON.stringify(structure));
    newStructure[0].folders.push({name: folderName, folders: [], files: []});
    setStructure(newStructure);
  };

  return (
    <div>
      <div>
        <Toolbar selectedFile={selectedFile} onSave={handleFileSave} />
      </div>
      <div className='flex'>
        <div className='w-1/5'>
          <Sidebar structure={structure} onSelectFile={setSelectedFile} onAddFile={handleAddFile} onAddFolder={handleAddFolder} />
        </div>
        <div className='w-4/5'>
          <CustomEditor file={selectedFile} />
        </div>
      </div>
    </div>
  );
}

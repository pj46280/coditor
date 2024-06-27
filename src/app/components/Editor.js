"use client"; 

import Editor from '@monaco-editor/react';
import { useState, useEffect } from 'react';
import { extensions } from '../config';


const CustomEditor = ({ file }) => {
    const [content, setContent] = useState(null);
    const [fileExtension, setFileExtension] = useState(null);
    
    useEffect(() => {
        if (file) {
            setContent(file.content);
            setFileExtension(extensions[file.extension].language);
            console.log(file);
        }
    }, [file]);

    const handleContentChange = (file) => {
        if (file) {
            file.content = content;
        }
    };

    useEffect(() => {
        if (file) {
            handleContentChange(file);
        }
    }, [content]);

    const handleEditorChange = (value) => {
        setContent(value);
    };

    return (
        <div className="h-full">
            <Editor 
                height="100%"
                defaultValue="// Select a file to view its contents" 
                value={content} 
                theme="vs-dark" 
                onChange={handleEditorChange}
                language={fileExtension}
            />
        </div>
    );
}

export default CustomEditor;

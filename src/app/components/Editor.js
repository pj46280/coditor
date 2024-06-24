"use client"; 

import Editor from '@monaco-editor/react';
import { useState, useEffect } from 'react';

const CustomEditor = ({ file }) => {
    const [content, setContent] = useState('');
    
    useEffect(() => {
        if (file) {
            setContent(file.content);
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
            />
        </div>
    );
}

export default CustomEditor;

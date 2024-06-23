"use client"; 

const File = ({ file, onSelect }) => {
  return (
    <div className="cursor-pointer" onClick={() => {
        onSelect(file);
        }}>
      📄 {file.name}
    </div>
  )
}

export default File

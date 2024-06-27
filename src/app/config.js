import { FaFile, FaCss3, FaHtml5, FaPython } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

export const extensions = {
    "txt": {language: "text", logo: <FaFile size={15} />},
    "js": {language: "javascript", logo: <SiJavascript />},
    "ts": {language: "typescript", logo: <SiTypescript />},
    "css": {language: "css", logo: <FaCss3 />},
    "html": {language: "html", logo: <FaHtml5 />},
    "py": {language: "python", logo: <FaPython />},
};
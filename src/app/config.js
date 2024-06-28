import { FaCss3, FaHtml5, FaPython, FaHashtag, FaMarkdown, FaJava } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiC, SiPhp } from "react-icons/si";
import { TbBrandCpp, TbFileTypeXml  } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";

export const extensions = {
    "txt": {language: "text", logo: <FiFileText size={20} />},
    "js": {language: "javascript", logo: <SiJavascript size={20} className="text-yellow-300" />},
    "ts": {language: "typescript", logo: <SiTypescript size={20} className="text-blue-500" />},
    "css": {language: "css", logo: <FaCss3 size={20} className="text-blue-400" />},
    "html": {language: "html", logo: <FaHtml5 size={20} className="text-orange-500" />},
    "py": {language: "python", logo: <FaPython size={20} className="text-cyan-800" />},
    "cpp": {language: "cpp", logo: <TbBrandCpp size={20} className="text-rose-500" />},
    "c": {language: "c", logo: <SiC size={15} className="text-pink-500" />},
    "cs": {language: "cs", logo: <FaHashtag size={20} className="text-blue-500" />},
    "php": {language: "php", logo: <SiPhp size={20} className="text-indigo-400" />},
    "xml": {language: "xml", logo: <TbFileTypeXml size={20} className="text-orange-500" />},
    "md": {language: "markdown", logo: <FaMarkdown size={20} className="text-blue-300" />},
    "java": {language: "java", logo: <FaJava size={20} className="text-amber-400" />},
    "json": {language: "json", logo: <VscJson size={20} className="text-lime-700" />}
};
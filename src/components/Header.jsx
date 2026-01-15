
import { useNavigate } from "react-router-dom";
import '../styles/header.css'
import { useState } from "react";


export default function Header() {
  const navigate = useNavigate();
  const [isFrench, setIsFrench] = useState(true)

  
    const toggleLang = () => {
    setIsFrench(prev => !prev);
  };

  
 


  return (
   <div className='header'>

<div class="nav">
  <div class="container">
    <div className="btn" onClick={()=> navigate('/')}>Accueil</div>
    <div className="btn" onClick={()=> navigate('/Skills')}>Compétences</div>
    <div className="btn" onClick={()=> navigate('/Projects')}>Projets</div>
    <div className="btn" onClick={()=> navigate('/Contact')}>Contact</div>
    <div className='btn' onClick={toggleLang}> {isFrench ? "Français" : "English"} </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100% 60"
      height="60"
      width="100%"
      overflow="visible"
      class="outline"
    >
      <rect
        stroke-width="5"
        fill="transparent"
        height="60"
        width="100%"
        y="0"
        x="0"
        pathLength="100"
        class="rect"
      ></rect>
    </svg>
  </div>
</div>

    </div>
  );
}

import { useNavigate } from "react-router-dom";
import '../styles/header.css'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';


export default function Header() {
  const navigate = useNavigate();
  const { isFrench, toggleLanguage } = useLanguage();
  const t = translations[isFrench ? 'fr' : 'en'];


  return (
   <div className='header'>

<div class="nav">
  <div class="container">
    <div className="btn" onClick={()=> navigate('/')}>{t.nav.home}</div>
    <div className="btn" onClick={()=> navigate('/Skills')}>{t.nav.skills}</div>
    <div className="btn" onClick={()=> navigate('/Projects')}>{t.nav.projects}</div>
    <div className="btn" onClick={()=> navigate('/Contact')}>{t.nav.contact}</div>
    <div className='btn' onClick={toggleLanguage}> {t.nav.language} </div>
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
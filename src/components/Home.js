import React from 'react';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
import tom from '../assets/tom pro.jpeg';
import { FaReact } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Home = () => {
  const navigate = useNavigate()
  const { isFrench, toggleLanguage } = useLanguage();
  const t = translations[isFrench ? 'fr' : 'en'];
  const text = t.home.footer;


  return (
    
<div className="home">


    <div className='header'>

<div class="nav">
  <div class="container">
    <div className="btn" onClick={()=> navigate('/About')}>{t.nav.about}</div>
    <div className="btn" onClick={()=> navigate('/Skills')}>{t.nav.skills}</div>
    <div className="btn" onClick={()=> navigate('/Projects')}>{t.nav.projects}</div>
    <div className="btn" onClick={()=> navigate('/Contact')}>{t.nav.contact}</div>
    <div className='btn'onClick={toggleLanguage}> {t.nav.language}</div>
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
    <div className='main-content'>
        {/* <h1 className='title'>Tom Fontaine</h1>
        <h2 className='sub-title'>Développeur Full Stack</h2>
        <p className='description'>Du monde de l'audiovisuel à l'univers du code, j'aime créer des expériences digitales</p> */}
        <div class="card">
  <div className="img">
    <img src={tom} alt="Tom" className='img-content' />
  </div>
  <span>{t.home.inBrief}</span>
  <p class="info">{t.home.description}</p>
  <div class="share">
    <a href="https://github.com/Tom33270"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg></a>
   <a
  href="https://www.linkedin.com/in/tom-fontaine "
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-linkedin"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.52 1.248 1.327 1.248h.016zm4.908 8.212h2.4V9.359c0-.203.015-.406.074-.551.163-.406.535-.827 1.16-.827.819 0 1.146.624 1.146 1.54v3.873h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193h.016V6.169h-2.4c.03.67 0 7.225 0 7.225z"/>
  </svg>
</a>
  </div >
   <div className='buttons'>
    <button className='btn-details'>{t.home.cv}</button>
    <button className='btn-details'>{t.home.coverLetter}</button>
    </div>
</div>
       
        
    </div>
    <div className='footer'>
      
   
<div className="loader-wrapper">
  <div className="loader">
   <div className='react-logo'> <FaReact /></div>
  </div>
  <div className="letter-wrapper">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="loader-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>

</div>

    </div>
  
 </div>


  
  );
};

export default Home;
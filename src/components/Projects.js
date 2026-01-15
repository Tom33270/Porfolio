import React from 'react';
import '../styles/projects.css';
import Header from '../components/Header';
import parentpalImage from '../assets/LogoApp.png';
import divingSiteImage from '../assets/diving.png';
import rnpcDocImage from '../assets/rncp-doc.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { isFrench } = useLanguage();
  const t = translations[isFrench ? 'fr' : 'en'];
  const openWebsite = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/RNCP.pdf';
    link.download = 'Dossier_RNCP_Tom_Fontaine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='projects'>
      <Header />

      <div className='projects-container'>
        <h1 className='projects-main-title'>{t.projects.title}</h1>

        {/* ParentPal AI */}
        <div className='project-card featured'>
          <div className='project-image'>
            <img src={parentpalImage} alt="ParentPal AI" />
            <div className='project-badge'>{t.projects.mainProject}</div>
          </div>
          <div className='project-content'>
            <h2 className='project-title'>{t.projects.parentpal.title}</h2>
            <p className='project-subtitle'>{t.projects.parentpal.subtitle}</p>
            <p className='project-description'>
              {t.projects.parentpal.description}
            </p>
            <div className='project-tech'>
              <span className='tech-tag'>React Native</span>
              <span className='tech-tag'>Node.js</span>
              <span className='tech-tag'>Express</span>
              <span className='tech-tag'>MongoDB</span>
              <span className='tech-tag'>Google Gemini API</span>
              <span className='tech-tag'>Cloudinary</span>
              <span className='tech-tag'>Expo</span>
            </div>
            <div className='project-buttons'>
              <button className='btn-primary' onClick={() => openWebsite('https://github.com/Tom33270/ParentPal-AI-frontend')}>
                {t.projects.parentpal.btnGithub}
              </button>
              <button className='btn-secondary' onClick={() => openWebsite('https://expo.dev/preview/update?message=logo&updateRuntimeVersion=1.0.0&createdAt=2025-12-19T14%3A07%3A09.966Z&slug=exp&projectId=c850b847-128f-44cc-bdb8-a21b6f182f17&group=9278f00f-05e0-4047-b31b-547a3d1084f8')}>
                {t.projects.parentpal.btnDemo}
              </button>
            </div>
          </div>
        </div>

        {/* Site de plongée */}
        <div className='project-card in-progress'>
          <div className='project-image'>
            <img src={divingSiteImage} alt="Site de plongée" />
            <div className='project-badge in-progress-badge'>{t.projects.inProgress}</div>
          </div>
          <div className='project-content'>
            <h2 className='project-title'>{t.projects.diving.title}</h2>
            <p className='project-subtitle'>{t.projects.diving.subtitle}</p>
            <p className='project-description'>
              {t.projects.diving.description}
            </p>
            <div className='project-tech'>
              <span className='tech-tag'>React</span>
              <span className='tech-tag'>Node.js</span>
              <span className='tech-tag'>Express</span>
              <span className='tech-tag'>CSS3</span>
            </div>
            <div className='project-buttons'>
              <button className='btn-primary' onClick={() => openWebsite('https://hugo-diving.vercel.app/')} >
                {t.projects.diving.btnDev}
              </button>
              <button className='btn-secondary' onClick={() => openWebsite('https://github.com/Tom33270/Hugo-diving')}>
                {t.projects.diving.btnGithub}
              </button>
            </div>
          </div>
        </div>

        {/* Dossier RNCP */}
        <div className='project-card document'>
          <div className='project-image document-image'>
            <img src={rnpcDocImage} alt="Dossier RNCP" />
            <div className='project-badge document-badge'>{t.projects.certification}</div>
          </div>
          <div className='project-content'>
            <h2 className='project-title'>{t.projects.rncp.title}</h2>
            <p className='project-subtitle'>{t.projects.rncp.subtitle}</p>
            <p className='project-description'>
              {t.projects.rncp.description}
            </p>
            <div className='project-info'>
              <p><strong>{t.projects.rncp.formation}</strong> {t.projects.rncp.formationValue}</p>
              <p><strong>{t.projects.rncp.title2}</strong> {t.projects.rncp.titleValue}</p>
              <p><strong>{t.projects.rncp.level}</strong> {t.projects.rncp.levelValue}</p>
            </div>
            <div className='project-buttons'>
              <button
                className='btn-primary'
                onClick={() => {downloadFile({rnpcDocImage}); console.log('downloaded')}}

              >
               {t.projects.rncp.btnDownload}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
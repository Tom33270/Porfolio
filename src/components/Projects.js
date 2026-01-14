import React from 'react';
import '../styles/projects.css';
import Header from '../components/Header';
import parentpalImage from '../assets/LogoApp.png';
import divingSiteImage from '../assets/diving.png';
import rnpcDocImage from '../assets/rncp-doc.png';

const Projects = () => {
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
        <h1 className='projects-main-title'>Mes Projets</h1>

        {/* ParentPal AI */}
        <div className='project-card featured'>
          <div className='project-image'>
            <img src={parentpalImage} alt="ParentPal AI" />
            <div className='project-badge'>Projet principal</div>
          </div>
          <div className='project-content'>
            <h2 className='project-title'>ParentPal AI</h2>
            <p className='project-subtitle'>Application mobile de support parental avec IA</p>
            <p className='project-description'>
              Application React Native complète développée en équipe de 3 personnes. 
              Intègre un chat IA avec l'API Gemini de Google, un forum communautaire 
              avec système CRUD, authentification sécurisée et upload de photos via Cloudinary. 
              Migration complète du backend de CommonJS vers ES modules pour assurer la compatibilité.
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
              <button className='btn-primary' onClick={() => openWebsite('https://github.com/FelixHls/ParentPalAI-frontend')}>
                Voir sur GitHub
              </button>
              <button className='btn-secondary' onClick={() => openWebsite('https://expo.dev/preview/update?message=logo&updateRuntimeVersion=1.0.0&createdAt=2025-12-19T14%3A07%3A09.966Z&slug=exp&projectId=c850b847-128f-44cc-bdb8-a21b6f182f17&group=9278f00f-05e0-4047-b31b-547a3d1084f8')}>
                Demo Expo
              </button>
            </div>
          </div>
        </div>

        {/* Site de plongée */}
        <div className='project-card in-progress'>
          <div className='project-image'>
            <img src={divingSiteImage} alt="Site de plongée" />
            <div className='project-badge in-progress-badge'>En cours</div>
          </div>
          <div className='project-content'>
            <h2 className='project-title'>Site de Plongée Sous-Marine</h2>
            <p className='project-subtitle'>Site web pour club de plongée</p>
            <p className='project-description'>
              Site web en cours de développement pour le club de plongée de mon frère. 
              Présentation des activités, système de réservation, galerie photos des plongées, 
              et section actualités. Interface responsive et moderne pour attirer de nouveaux membres.
            </p>
            <div className='project-tech'>
              <span className='tech-tag'>React</span>
              <span className='tech-tag'>Node.js</span>
              <span className='tech-tag'>Express</span>
              <span className='tech-tag'>CSS3</span>
            </div>
            <div className='project-buttons'>
              <button className='btn-primary' onClick={() => openWebsite('https://hugo-diving.vercel.app/')} >
                En développement
              </button>
              <button className='btn-secondary' onClick={() => openWebsite('https://github.com/Tom33270/Hugo-diving')}>
                Voir sur GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Dossier RNCP */}
        <div className='project-card document'>
          <div className='project-image document-image'>
            <img src={rnpcDocImage} alt="Dossier RNCP" />
            <div className='project-badge document-badge'>Certification</div>
          </div>
          <div className='project-content'>
            <h2 className='project-title'>Dossier Professionnel RNCP</h2>
            <p className='project-subtitle'>Titre RNCP Niveau 6 - Développeur Full-Stack</p>
            <p className='project-description'>
              Dossier professionnel complet présenté pour l'obtention du titre RNCP 37625 
              de Développeur Full-Stack. Comprend l'analyse détaillée de mes projets, 
              la documentation technique, les compétences acquises et validées durant 
              la formation La Capsule, ainsi que mes mock interviews techniques.
            </p>
            <div className='project-info'>
              <p><strong>Formation :</strong> La Capsule - Batch 183 (Oct-Déc 2024)</p>
              <p><strong>Titre :</strong> Développeur Full-Stack Web & Mobile</p>
              <p><strong>Niveau :</strong> RNCP Niveau 6 (Bac+3/4)</p>
            </div>
            <div className='project-buttons'>
              <button 
                className='btn-primary' 
                onClick={() => {downloadFile({rnpcDocImage}); console.log('downloaded')}}
                
              >
               Télécharger le dossier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import tom from '../assets/tom.jpeg';
import regie from '../assets/puy du fou.jpeg'
import '../styles/about.css'
import Header from "../components/Header";
import firstImpressionLogo from '../assets/firstimpression logo.jpg';
import parisSaclayLogo from '../assets/cps logo.jpg'
import allEventsLogo from '../assets/allevents logo.jpg'
import immersionLogo from '../assets/immersion logo.jpg'
import sanofiLogo from '../assets/sanofi logo.jpg'
import saclayLogo from '../assets/mairieSaclay logo.jpg'
import puyDuFouLogo from '../assets/Puy du fou logo.jpg'






const About = () => {
    
     
    return (
        <div className ='general'>
        <Header/>

        <div className='about'>
            



            <div className='main-content'>
            
                <h1 className='title'>A propos</h1>
                
                
                 <img src={tom} alt="Tom" className='img-main' />
            <h2 className='sub-title'>Tom Fontaine, 31 ans, Bordeaux</h2>

<p className='info'>
    Passionné de technologie depuis toujours, 
    je me suis récemment lancé dans une reconversion professionnelle pour transformer mon envie de devenir 
    développeur informatique en réalité.
</p>

<p className='info'>
    Mon parcours technique a débuté avec un Baccalauréat professionnel en Systèmes Électroniques et Numériques 
    (GPS, tableaux de bord automobiles, ferroviaires et aéronautiques). J'ai ensuite obtenu un diplôme de 
    Technicien Son et accumulé plusieurs années d'expérience enrichissantes dans l'audiovisuel. Ce premier 
    métier m'a enseigné la rigueur technique, la gestion d'imprévus, le travail en équipe et la capacité 
    à livrer sous pression; des qualités qui se révèlent aujourd'hui essentielles dans ma pratique du code.
</p>

<p className='info'>
    Attiré par la logique, la créativité et l'impact concret des applications web et mobiles, j'ai suivi 
    une formation intensive de Développeur Full-Stack web et mobile chez La Capsule à Bordeaux du 13 octobre au 19 décembre 2025. Durant ces 
    10 semaines, j'ai acquis une maîtrise solide des technologies modernes : JavaScript, React, React Native, 
    Node.js, Express et MongoDB. J'ai récemment obtenu le titre RNCP niveau 6 de Développeur Full-Stack 
    (RNCP 37625).
</p>

<p className='info'>
    Mon projet de fin de formation, <strong>ParentPal AI</strong>, illustre ma capacité à concevoir une 
    architecture complète : API REST, authentification sécurisée, forum communautaire et intégration d'une 
    IA conversationnelle avec l'API Gemini de Google. Ce projet m'a permis de mettre en pratique l'ensemble 
    de mes compétences, du design à la base de données, en passant par le déploiement.
</p>

<p className='info'>
    Ce qui m'anime aujourd'hui, c'est la possibilité de transformer une idée en produit fonctionnel, utile 
    et élégant. J'aime autant concevoir des interfaces intuitives que résoudre des problématiques backend 
    complexes. Ma reconversion est née d'une envie profonde : créer, apprendre en continu et contribuer 
    à des projets qui améliorent réellement l'expérience des utilisateurs. Sur ce site, vous découvrirez 
    les différents projets auxquels j'ai participé pendant ma formation ainsi que mes réalisations en cours.
</p>
                </div>
              

<div className='trust-section'>
  <h2 className='trust-title'>Ils m'ont fait confiance</h2>
  <p className='trust-subtitle'>
    Durant mon parcours de technicien audiovisuel, j'ai eu l'opportunité de collaborer 
    avec diverses entreprises et institutions sur des projets d'envergure.
  </p>
  
  <div className='companies-grid'>
    <div className='company-card'>
      <div className='company-logo'>
        <img src={firstImpressionLogo} alt="First Impression" />
      </div>
      <h3 className='company-name'>First Impression</h3>
      <p className='company-role'>Technicien Audiovisuel</p>
      <p className='company-description'>LED walls, systèmes son</p>
    </div>

    <div className='company-card'>
      <div className='company-logo'>
        <img src={puyDuFouLogo} alt="Puy du Fou" />
      </div>
      <h3 className='company-name'>Puy du Fou</h3>
      <p className='company-role'>Technicien Audiovisuel</p>
      <p className='company-description'>Spectacles et événements</p>
    </div>

    <div className='company-card'>
      <div className='company-logo'>
        <img src={sanofiLogo} alt="Sanofi" />
      </div>
      <h3 className='company-name'>Sanofi</h3>
      <p className='company-role'>Technicien Audiovisuel</p>
      <p className='company-description'>Événements corporate</p>
    </div>

    <div className='company-card'>
      <div className='company-logo'>
        <img src={allEventsLogo} alt="AllEvents" />
      </div>
      <h3 className='company-name'>AllEvents</h3>
      <p className='company-role'>Technicien Audiovisuel</p>
      <p className='company-description'>Événementiel de luxe</p>
    </div>

    <div className='company-card'>
      <div className='company-logo'>
        <img src={immersionLogo} alt="Immersion" />
      </div>
      <h3 className='company-name'>Immersion</h3>
      <p className='company-role'>Technicien Audiovisuel</p>
      <p className='company-description'>Production audiovisuelle</p>
    </div>

    <div className='company-card'>
      <div className='company-logo'>
        <img src={parisSaclayLogo} alt="Communauté Paris-Saclay" />
      </div>
      <h3 className='company-name'>Communauté Paris-Saclay</h3>
      <p className='company-role'>Technicien Audiovisuel</p>
      <p className='company-description'>Événements / concerts / théatres</p>
    </div>

    <div className='company-card'>
      <div className='company-logo'>
        <img src={saclayLogo} alt="Mairie de Saclay" />
      </div>
      <h3 className='company-name'>Mairie de Saclay</h3>
      <p className='company-role'>Freelance</p>
      <p className='company-description'>Événements municipaux</p>
    </div>
  </div>
</div>
          
        </div>
        </div> 
    )

}
export default About;
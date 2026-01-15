
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
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';






const About = () => {
    const { isFrench } = useLanguage();
    const t = translations[isFrench ? 'fr' : 'en'];

    return (
        <div className ='general'>
        <Header/>

        <div className='about'>
            



            <div className='main-content'>

                <h1 className='title'>{t.about.title}</h1>


                 <img src={tom} alt="Tom" className='img-main' />
            <h2 className='sub-title'>{t.about.subtitle}</h2>

<p className='info'>
    {t.about.paragraph1}
</p>

<p className='info'>
    {t.about.paragraph2}
</p>

<p className='info'>
    {t.about.paragraph3}
</p>

<p className='info'>
    {t.about.paragraph4}
</p>

<p className='info'>
    {t.about.paragraph5}
</p>
                </div>
              

<div className='trust-section'>
  <h2 className='trust-title'>{t.about.trustTitle}</h2>
  <p className='trust-subtitle'>
    {t.about.trustSubtitle}
  </p>

  <div className='companies-grid'>
    <div className='company-card' onClick={() => window.open('https://www.firstimpression.com', '_blank')}>
      <div className='company-logo'>
        <img src={firstImpressionLogo} alt="First Impression" />
      </div>
      <h3 className='company-name'>First Impression</h3>
      <p className='company-role'>{t.about.role}</p>
      <p className='company-description'>{t.about.descriptions.firstImpression}</p>
    </div>

    <div className='company-card' onClick={() => window.open('https://www.puydufou.com', '_blank')}>
      <div className='company-logo'>
        <img src={puyDuFouLogo} alt="Puy du Fou" />
      </div>
      <h3 className='company-name'>Puy du Fou</h3>
      <p className='company-role'>{t.about.role}</p>
      <p className='company-description'>{t.about.descriptions.puyDuFou}</p>
    </div>

    <div className='company-card' onClick={() => window.open('https://www.sanofi.com', '_blank')}>
      <div className='company-logo'>
        <img src={sanofiLogo} alt="Sanofi" />
      </div>
      <h3 className='company-name'>Sanofi</h3>
      <p className='company-role'>{t.about.role}</p>
      <p className='company-description'>{t.about.descriptions.sanofi}</p>
    </div>

    <div className='company-card' onClick={() => window.open('https://www.allevents.fr', '_blank')}>
      <div className='company-logo'>
        <img src={allEventsLogo} alt="AllEvents" />
      </div>
      <h3 className='company-name'>AllEvents</h3>
      <p className='company-role'>{t.about.role}</p>
      <p className='company-description'>{t.about.descriptions.allEvents}</p>
    </div>

    <div className='company-card' onClick={() => window.open('https://www.immersion.fr', '_blank')}>
      <div className='company-logo'>
        <img src={immersionLogo} alt="Immersion" />
      </div>
      <h3 className='company-name'>Immersion</h3>
      <p className='company-role'>{t.about.role}</p>
      <p className='company-description'>{t.about.descriptions.immersion}</p>
    </div>

    <div className='company-card' onClick={() => window.open('https://www.paris-saclay.com', '_blank')} >
      <div className='company-logo'>
        <img src={parisSaclayLogo} alt="Communauté Paris-Saclay" />
      </div>
      <h3 className='company-name'>Communauté Paris-Saclay</h3>
      <p className='company-role'>{t.about.role}</p>
      <p className='company-description'>{t.about.descriptions.parisSaclay}</p>
    </div>

    <div className='company-card' onClick={() => window.open('https://www.saclay.fr', '_blank')}>
      <div className='company-logo'>
        <img src={saclayLogo} alt="Mairie de Saclay" />
      </div>
      <h3 className='company-name'>Mairie de Saclay</h3>
      <p className='company-role'>{t.about.freelance}</p>
      <p className='company-description'>{t.about.descriptions.saclay}</p>
    </div>
  </div>
</div>
          
        </div>
        </div> 
    )

}
export default About;
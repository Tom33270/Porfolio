import { useNavigate } from 'react-router-dom';
import tom from '../assets/tom.jpeg';
import regie from '../assets/puy du fou.jpeg'
import '../styles/about.css'
import Header from "../components/Header";




const About = () => {
     const navigate = useNavigate()
    return (

        <div className='about'>
            
   <Header/>


            <div className='main-content'>
            
                <h1 className='title'>A propos</h1>
                
                
                 <img src={tom} alt="Tom" className='img-main' />
            

                <h2 className='sub-title'>Tom Fontaine, 31 ans, Bordeaux</h2>
                <p className='info'> Je m'appelle Tom Fontaine, j'ai 31 ans, j'habite actuellement à Bordeaux je suis un grand passionnée de technologie et je m'intéresse
                    au développement informatique depuis pas mal de temps et je me suis enfin décidé à passer le pas en faisant d'une envie de devenir développeur informatique à la réalité de la transformer en mon futur métier.
                
                     <br/>J'ai commencé mon parcours technique en passant un Baccalauréat professionnel sur les systèmes électroniques et numériques (les gps, les tableaux de bord de voitures, train, avion pour résumer).<br/>
                    Après l'obtention de mon diplôme, j'ai suivi une école et obtenu le diplôme de technicien Son. Maintenant? j'ai suivi une formation de Développeur Full-Stack web et app mobile chez La Capsule à Bordeaux et j'ai obtenu le diplôme 
                    de Développeur full-Stack du titre RNCP 37625. Sur mon site web, vous pourrez trouver les différents projets  
                </p>
                 
                 





                <p className='info' >
                    j’ai choisi de me reconvertir dans le développement web après plusieurs années en tant que technicien audiovisuel. 
                    Ce premier parcours m’a appris la rigueur technique, la gestion d’imprévus,
                    le travail d’équipe et la capacité à livrer sous pression — des qualités qui se révèlent aujourd’hui essentielles dans ma pratique du code.
                    Attiré par la logique, la créativité et l’impact concret des applications web et mobiles, 
                    j’ai suivi une formation intensive de développeur full stack à La Capsule. Durant ces 10 semaines, 
                    j’ai acquis une maîtrise solide des technologies modernes : JavaScript, React, React Native, Node.js, 
                    Express et MongoDB. Mon projet final, ParentPal AI, m’a permis de concevoir une architecture complète mêlant API-first, 
                    authentification sécurisée, forum communautaire et intégration d’une IA conversationnelle.
                    Ce qui m’anime aujourd’hui, c’est la possibilité de transformer une idée en produit fonctionnel, utile et élégant. 
                    J’aime autant concevoir des interfaces intuitives que résoudre des problématiques backend complexes. 
                    Ma reconversion est née d’une envie profonde : créer, apprendre en continu et contribuer à des projets qui améliorent réellement l’expérience des utilisateurs. 

                </p>
                </div>
          
        </div>
    )

}
export default About;
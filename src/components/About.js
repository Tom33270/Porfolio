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
            

                <h2 className='sub-title'>Introduction</h2>
                <p className='info'>Je me présente, je m'appelle Tom Fontaine, j'ai 31 ans, j'habite actuellement à Bordeaux je suis un grand passionnée de technologie et je m'intéresse
                    au développement informatique depuis pas mal de temps et j'ai enfin décidé de passer le pas en faisant d'une réelle envie de devenir développeur informatique à la transformer en mon futur métier.
                
                     <br/>J'ai commencé mon parcours technique en passant un Baccalauréat professionnel sur les systèmes électroniques et numériques (les gps, les tableaux de bord de voitures, train, avion pour résumer).<br/>
                    Après l'obtention de mon diplôme, j'ai suivi une école et obtenu le diplôme de technicien Son. Maintenant? j'ai suivi une formation de Développeur Full-Stack web et app mobile chez La Capsule à Bordeaux et j'ai obtenu le diplôme 
                    de Développeur full-Stack du titre RNCP 37625 
                </p>
                 
                 <h2 className='sub-title'>Le Puy du Fou</h2>
                   <img src={regie} alt="puy du fou" className='img-text3' />
                   <p className='info' >
                  
                    Ma toute première expérience professionnelle a eu lieu au Puy
                     
                     du Fou en Vendée en tant que régisseur audiovisuel sur le spectacle du dernier panache.
                    je gérais tout le déroulé technique de la représentation avec  une salle pouvant contenir 800 personnes et 40 artistes sur 8 plateaux différents, c'était un gros challenge pour une première expérience.
                    J'avais accès à un matériel haut de gamme. J'ai pu apprendre les bases du <strong>travail en équipe</strong>, gérer le stress avec un rythme de 7 représentations journalières pendant 8 mois, développer une <strong>adaptabilité à mon environnement de travail</strong> avec des technologies
                    que je n'avais pas encore pu voir.  
                </p> 
                
                <h2 className='sub-title'>Communauté Paris-Saclay</h2>
                <img src={regie} alt="Tom" className='img-text3' />
                <p className='info'>J'étais régisseur pour les différents événements de la communauté d'agglomération (concerts pros, théatre, festivals,...)
                    . Je faisais principalement de la lumière pour les pièces de théatres et concerts et j'avais en gestion plusieurs lieux dont une salle de concert de 250places
                    au concervatoire d'Orsay. On a pu participer à la résidence de Grand Corps Malade ou nous mettions en place sa tournée 2018. 
                    J'ai pu apprendre vraiment la <strong>créativité</strong> sur les choix de lumières et d'effets, la <strong>gestion du stress</strong> sur des événements live, <strong>l'organisation </strong>, la <strong>rédaction de plan technique</strong> (plan de feu, répartition scénique, etc...).
                    Dans le même temsp, j'étais intermittent du spectacle pour la mairie de Saclay ou j'avais la gestion technique et organisationnelle complète de leurs événements sur les différentes saisons culturelles. </p>

                  <h2 className='sub-title'>AllEvents</h2>

                  <img src={regie} alt="Tom" className='img-text3' />

                     <p className='info'> Ce fût une expérience vraiment intense, de gros horaires mais pour des rendus vraiment satisfaisant pour des événements exclusifs. Cette entreprise gère tous les gros événements de luxe présent dans la capitale ou
                      lieux d'exception. Nous avions en charge les différents événements dans des lieux tels que L'Opéra Garnier, L'Opéra Bastille, le pavillon dauphine, les grands hotels parisien (Shangri La, George V, Grand Hotel de Paris,...). je faisais la mise en valeur
                      des lieux avec une disposition des lumières, une gestion des éclairages pour les discours ou présentations lors de Galas ou concerts privés. J'ai pu encore améliorer mes compétences comme la résistance au stress avec des deadlines très courtes et des 
                      clients très exigeants, l'adaptabilité car les lieux changeaient chaque jour tout comme l'événement, le travail en équipe, nous étions souvent 2 personnes de l'entreprise avec une gestion de 3/4 Freelances pour nous aider à monter/démonter les scènes.
                     </p>

                      <h2 className='sub-title'>Sanofi</h2>
                      <img src={regie} alt="Tom" className='img-text3' />

                      <p className='info'>Je suis resté 2 ans au sein de Sanofi sur le site de R&D monde à Chilly Mazarin pour gérer leurs événements en interne avec des sessions webinaires à diffusion mondiale. 
                        j'avais une régie technique ou je m'occupais de la diffusion du flux vidéo/audio, des caméras, des lumières et du son.Une salle de 400 places et une autre plus petite de 170 places étaient mes principaux lieux de travail. j'ai pu développer encore un peu plus mon travail en autonommie, la gestion d'événement de grand ampleur, 
                        Lors de la crise Covid, j'étais présent pour gérer les conférences qui se faisaient et ce 24h/7. J'avais mon client principal qui était Sanofi et mon client secondaire qui était Derichbourg. 
                      </p>

                      <h2 className='sub-title'>Immersion</h2>
                      <img src={regie} alt="Tom" className='img-text3' />





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
            <button onClick={()=> navigate('/')}>HomePage</button>
        </div>
    )

}
export default About;
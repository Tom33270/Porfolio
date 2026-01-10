import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../styles/skills.css';
import Header from "../components/Header";
import { useState } from 'react';
import { style } from 'framer-motion/client';

const Skills = () => {
    const data = [
        { subject: 'Qualité & opti code', value: 83 , description: "Etre capable d'adopter les bonnes pratiques des développeurs professionnels / Mettre en place les principes du Clean Code"},
        { subject: 'Gestion projet', value: 100 , description: "Comprendre la méthode SCRUM / Etre capable de définir et organiser un sprint / Savoir chiffrer et prioriser les tâches / Savoir animé et organiser des points de suivi" },
        { subject: 'Design sprint', value: 100 , description: "Etre capable de définir la problématique et la cible / Savoir elaborer des storyboards / Savoir organiser des tests utilisateurs et réaliser des users journey map / Savoir créer des Wireframes, des Mockups et des UI kits avec Figma" },
        { subject: 'Intégration continue', value: 84 , description: "Etre capable d'utiliser les branches avec Git / Savoir mettre en place un dépôt distant avec GitHub / Gérer les conflits de code / Etre capable de déployer une application sur un serveur / Maîtriser le concept de TDD (Test Driven Development)" },
        { subject: 'HTML & CSS', value: 77 , description: "Maîtriser les fondamentaux HTML & CSS / Maîtriser les techniques de positionnement Flexbox / Savoir utiliser le responsive avec les media queries" },
        { subject: 'Backend & architecture logiciel', value: 76 , description: "Savoir utiliser le Framework Express / Maîtriser l’architecture MVC et le concept de routes / Mettre en place un système d'authentification sécurisé / Maîtriser le concept du CRUD dans les requêtes HTTP / Etre capable de concevoir une architecture en REST" },
        { subject: 'JavaScript Frontend', value: 84 , description: "Maîtriser les fondamentaux JS frontend et utiliser ES6 / Savoir apporter de l’interactivité via les événements / Savoir dynamiser le HTML via le DOM / Etre capable de communiquer avec un webservice avec la méthode Fetch" },
        { subject: 'Fonctionnalités avancées', value: 76 , description: "Mettre en place la librairie Redux / Mettre en place la persistance des données avec Redux Persist / Maîtriser les références / Manipuler et mettre en place l’upload de fichiers binaires / Mettre en place une messagerie en temps réel avec les websockets et Pusher / Mettre en place TypeScript" },
        { subject: 'React web', value: 84 , description: "Etre capable de créer et utiliser les composants et exploiter leur cycle de vie / Maîtriser les concepts de propriété (prop) et d’état (state) / Savoir gérer la navigation avec NextJS / Etre capable d'optimiser le référencement (SEO) d’une application React" },
        { subject: 'React Native', value: 77 , description: "Savoir installer et maîtriser l’environnement Expo / Savoir intégrer un système de géolocalisation / Etre capable d'exploiter la caméra d’un mobile / Mettre en place la navigation" },
        { subject: 'Setup', value: 83 , description: "Savoir installer et configurer un IDE / Savoir utiliser le terminal et les commandes de base / Etre capable d'installer l’environnement de NodeJS / Savoir installer Git et utiliser les commande" },
        { subject: 'Base de données', value: 83 , description: "Savoir concevoir et modéliser une base de données / Maîtriser les concepts de clé étrangère et clé primaire / Maîtriser le potentiel du NoSQL à travers les sous-documents / Etre capable d'exploiter une BDD au travers les opérations CRUD /Manipuler les données avec les requêtes avancées / Etre capable d'exploiter la base de donnée avec un ORM /  Etre capable de mettre en place des procédures conformes aux directives du RGPD et de la CNIL" },
        { subject: 'Bases programmation', value: 90 , description: "Manipuler les structures JavaScript & les différents types de données  / Maîtriser les expressions régulières / Etre capable de factoriser son code grâce aux fonctions" }
    ];
    const descriptions = Object.fromEntries(
  data.map(item => [
    item.subject,
    {
    score: item.value,       
    description :item.description
    }
  ])
);

    const [selectedValue, setSelectedValue] = useState(null);
    const [hoveredSubject, setHoveredSubject] = useState(null);
    

    const CustomDot = ({ cx, cy, value }) => (
  <circle
    cx={cx}
    cy={cy}
    r={4}
    fill="#7364c8"
    stroke="#7364c8"
    strokeWidth={2}
    style={{ cursor: "pointer" }}
    onClick={() => setSelectedValue(value)}
  />
);



    const CustomTick = ({ payload, x, y, textAnchor, stroke, radius, onHover }) => {
    return (
        <text
            x={x}
            y={y}
            textAnchor={textAnchor}
            fill="#666"
            fontSize={23}
            style={{ cursor: "pointer" }}
            onHover={() => onHover(payload.value)}
        >
            {payload.value}
        </text>
    );
};

const CustomClick = ({ payload, x, y, textAnchor }) => (
  <text
    x={x}
    y={y}
    textAnchor={textAnchor}
    fill="#fff"
    fontSize={20}
    style={{ cursor: "pointer"}}
    onClick={() => setHoveredSubject(payload.value)}
    className='onHover'
   
    
  >
    {payload.value}
  </text>
);



    

    return (
        <div className='skills'>
            
            <Header/>

            <div className='graphic'>

            
            <ResponsiveContainer width="100%" height={600}>
                <RadarChart data={data}>
                    <PolarGrid stroke="#ccc" />
                    <PolarAngleAxis 
                        dataKey="subject" 
                        tick={CustomTick, CustomClick}
                    />
                    <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]}
                        tick={false}
                    />
                    <Radar 
                        name="Compétences" 
                        dataKey="value" 
                        dot={<CustomDot />}
                        stroke="#7364c8" 
                        fill="#7364c8" 
                        fillOpacity={0.6}
                        strokeWidth={3}
                    />
                </RadarChart>
            </ResponsiveContainer>

            {hoveredSubject && (
  <div className="modal">
    <h3 className='modal-subject'>{hoveredSubject}</h3>
    <p className='modal-score'> Score:  {descriptions[hoveredSubject].score}%</p>
    <p className='modal-description'>{descriptions[hoveredSubject].description}</p>
    
  </div>
)}
</div>
<div className='context'>
    <h2 className='context-title'> Contexte du graphique:</h2>
    <p className='info'>Ce graphique est issu du compte-rendu de ma formation sur le site, il résume  </p>
</div>


        </div>
    );
}

export default Skills;
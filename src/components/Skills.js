import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../styles/skills.css';
import Header from "../components/Header";
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';


const Skills = () => {
    const { isFrench } = useLanguage();
    const t = translations[isFrench ? 'fr' : 'en'];

    const data = [
        { subject: t.skills.subjects['Qualité & opti code'], value: 83 , description: t.skills.descriptions['Qualité & opti code']},
        { subject: t.skills.subjects['Gestion projet'], value: 100 , description: t.skills.descriptions['Gestion projet'] },
        { subject: t.skills.subjects['Design sprint'], value: 100 , description: t.skills.descriptions['Design sprint'] },
        { subject: t.skills.subjects['Intégration continue'], value: 84 , description: t.skills.descriptions['Intégration continue'] },
        { subject: t.skills.subjects['HTML & CSS'], value: 77 , description: t.skills.descriptions['HTML & CSS'] },
        { subject: t.skills.subjects['Backend & architecture logiciel'], value: 76 , description: t.skills.descriptions['Backend & architecture logiciel'] },
        { subject: t.skills.subjects['JavaScript Frontend'], value: 84 , description: t.skills.descriptions['JavaScript Frontend'] },
        { subject: t.skills.subjects['Fonctionnalités avancées'], value: 76 , description: t.skills.descriptions['Fonctionnalités avancées'] },
        { subject: t.skills.subjects['React web'], value: 84 , description: t.skills.descriptions['React web'] },
        { subject: t.skills.subjects['React Native'], value: 77 , description: t.skills.descriptions['React Native'] },
        { subject: t.skills.subjects['Setup'], value: 83 , description: t.skills.descriptions['Setup'] },
        { subject: t.skills.subjects['Base de données'], value: 83 , description: t.skills.descriptions['Base de données'] },
        { subject: t.skills.subjects['Bases programmation'], value: 90 , description: t.skills.descriptions['Bases programmation'] }
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

const CustomClick = ({ payload, x, y, textAnchor }) => {
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth <= 768;
  const fontSize = isMobile ? 10: isTablet ? 14 : 20;

  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fill="#fff"
      fontSize={fontSize}
      style={{ cursor: "pointer"}}
      onClick={() => setHoveredSubject(payload.value)}
      className='onHover'
    >
      {payload.value}
    </text>
  );
};



    

    return (
        <>
        <Header/>
        <div className='skills'>
            

            <div className='graphic'>

            
            <ResponsiveContainer width="100%" height={window.innerWidth <= 480 ? 400 : window.innerWidth <= 768 ? 500 : 600}>
                <RadarChart data={data}>
                    <PolarGrid stroke="#ccc" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={CustomTick, CustomClick}
                        style={{ fontSize: window.innerWidth <= 480 ? '10px' : window.innerWidth <= 768 ? '14px' : '20px' }}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={false}
                    />
                    <Radar
                        name={t.skills.competencesLabel}
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
    <p className='modal-score'> {t.skills.scoreLabel}  {descriptions[hoveredSubject].score}%</p>
    <p className='modal-description'>{descriptions[hoveredSubject].description}</p>

  </div>
)}
</div>
<div className='context'>
    <h2 className='context-title'>{t.skills.contextTitle}</h2>
    <p className='info'>
        {t.skills.contextText}
    </p>
</div>


        </div>
        </>
    );
}

export default Skills;
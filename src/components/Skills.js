import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../styles/skills.css';
import Header from "../components/Header";

const Skills = () => {
    const data = [
        { subject: 'Qualité & opti code', value: 88 },
        { subject: 'Gestion projet', value: 92 },
        { subject: 'Design sprint', value: 88 },
        { subject: 'Intégration continue', value: 85 },
        { subject: 'HTML & CSS', value: 90 },
        { subject: 'Backend', value: 93 },
        { subject: 'JavaScript Frontend', value: 95 },
        { subject: 'Fonctionnalités avancées', value: 90 },
        { subject: 'React web', value: 92 },
        { subject: 'React Native', value: 85 },
        { subject: 'Setup', value: 75 },
        { subject: 'Base de données', value: 80 },
        { subject: 'Bases programmation', value: 85 }
    ];

    return (
        <div className='skills'>
            <Header/>
            <ResponsiveContainer width="100%" height={600}>
                <RadarChart data={data}>
                    <PolarGrid stroke="#ccc" />
                    <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#666', fontSize: 23 }}
                    />
                    <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]}
                        tick={false}
                    />
                    <Radar 
                        name="Compétences" 
                        dataKey="value" 
                        stroke="#7364c8" 
                        fill="#7364c8" 
                        fillOpacity={0.6}
                        strokeWidth={3}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Skills;
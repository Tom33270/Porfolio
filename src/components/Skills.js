import { useNavigate } from 'react-router-dom';

const Skills = () => {
   const navigate = useNavigate()
    return (

        <div>
            <h1>
                Compétences
            </h1>
             <button onClick={()=> navigate('/')}>HomePage</button>
        </div>
    )

}
export default Skills;
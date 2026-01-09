import { useNavigate } from 'react-router-dom';

const Projects = () => {
     const navigate = useNavigate()
    return (

        <div>
            <h1>Projets</h1>
            <button onClick={()=> navigate('/')}>HomePage</button>
        </div>
    )

}
export default Projects;
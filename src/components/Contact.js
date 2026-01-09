import { useNavigate } from 'react-router-dom'
import '../styles/about.css'

const Contact = () => {
     const navigate = useNavigate()
    return (

        <div>
            <h1>contact</h1>
            <button onClick={()=> navigate('/')}>HomePage</button>
        </div>
    )

}
export default Contact;
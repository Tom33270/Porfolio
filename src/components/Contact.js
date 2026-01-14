import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'
import Header from "../components/Header";

const Contact = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nom: '',
        societe: '',
        email: '',
        telephone: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Effacer l'erreur du champ modifié
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.nom.trim()) {
            newErrors.nom = 'Le nom est obligatoire'
        }

        if (!formData.societe.trim()) {
            newErrors.societe = 'La société est obligatoire'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est obligatoire'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email invalide'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Le message est obligatoire'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Remplacez ces valeurs par vos identifiants EmailJS
            // Obtenez-les sur https://www.emailjs.com/
            const result = await emailjs.send(
                'service_1k0tl9q',  // Remplacez par votre Service ID
                'template_qxiz86s', // Remplacez par votre Template ID
                {
                    from_name: formData.nom,
                    from_company: formData.societe,
                    from_email: formData.email,
                    phone: formData.telephone || 'Non fourni',
                    message: formData.message,
                    to_email: 'fontaine.tom@hotmail.fr' // Remplacez par votre adresse email
                },
                'MiA6Fp8FTK2Zrpe1x'  // Remplacez par votre Public Key
            )

            console.log('Email envoyé avec succès:', result.text)
            setSubmitStatus('success')
            setFormData({
                nom: '',
                societe: '',
                email: '',
                telephone: '',
                message: ''
            })
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <><Header/>
        <div className="contact">
            
            <div className="contact-main-content">
                <h1 className="contact-title">Contactez-moi</h1>
                <p className="contact-subtitle">
                    Remplissez le formulaire ci-dessous pour me contacter
                </p>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">
                                Nom <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Votre nom complet"
                            />
                            {errors.nom && <span className="form-error">{errors.nom}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Société <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="societe"
                                value={formData.societe}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Nom de votre société"
                            />
                            {errors.societe && <span className="form-error">{errors.societe}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="votre.email@example.com"
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="+33 6 12 34 56 78"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Message <span className="required">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Votre message..."
                            />
                            {errors.message && <span className="form-error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                    </form>

                    {submitStatus === 'success' && (
                        <div className="success-message">
                            Message envoyé avec succès ! Je vous répondrai bientôt.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="error-message">
                            Erreur lors de l'envoi. Veuillez réessayer.
                        </div>
                    )}
                </div>

                <button className="back-btn" onClick={() => navigate('/')}>
                    Retour à l'accueil
                </button>
            </div>
        </div>
        </>
    )
}

export default Contact;
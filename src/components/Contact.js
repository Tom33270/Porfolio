import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'
import Header from "../components/Header";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
    const navigate = useNavigate()
    const { isFrench } = useLanguage();
    const t = translations[isFrench ? 'fr' : 'en'];

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
            newErrors.nom = t.contact.errors.nameRequired
        }

        if (!formData.societe.trim()) {
            newErrors.societe = t.contact.errors.companyRequired
        }

        if (!formData.email.trim()) {
            newErrors.email = t.contact.errors.emailRequired
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t.contact.errors.emailInvalid
        }

        if (!formData.message.trim()) {
            newErrors.message = t.contact.errors.messageRequired
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
                <h1 className="contact-title">{t.contact.title}</h1>
                <p className="contact-subtitle">
                    {t.contact.subtitle}
                </p>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">
                                {t.contact.name} <span className="required">{t.contact.required}</span>
                            </label>
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className="form-input"
                                placeholder={t.contact.placeholders.name}
                            />
                            {errors.nom && <span className="form-error">{errors.nom}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                {t.contact.company} <span className="required">{t.contact.required}</span>
                            </label>
                            <input
                                type="text"
                                name="societe"
                                value={formData.societe}
                                onChange={handleChange}
                                className="form-input"
                                placeholder={t.contact.placeholders.company}
                            />
                            {errors.societe && <span className="form-error">{errors.societe}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                {t.contact.email} <span className="required">{t.contact.required}</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder={t.contact.placeholders.email}
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                {t.contact.phone}
                            </label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                className="form-input"
                                placeholder={t.contact.placeholders.phone}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                {t.contact.message} <span className="required">{t.contact.required}</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder={t.contact.placeholders.message}
                            />
                            {errors.message && <span className="form-error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t.contact.sending : t.contact.send}
                        </button>
                    </form>

                    {submitStatus === 'success' && (
                        <div className="success-message">
                            {t.contact.successMessage}
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="error-message">
                            {t.contact.errorMessage}
                        </div>
                    )}
                </div>

                <button className="back-btn" onClick={() => console.log('FR : +336 31 89 58 35')}>
                    {t.contact.phoneButton}
                </button>
            </div>
        </div>
        </>
    )
}

export default Contact;
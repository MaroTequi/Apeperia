import { useState } from 'react'
import './Contato.css'

export default function Contato() {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
    const [status, setStatus] = useState(null)
    const [sending, setSending] = useState(false)

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        try {
            const res = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error()
            const data = await res.json()
            setStatus(data.mensagem || 'Mensagem enviada com sucesso!')
            setForm({ nome: '', email: '', mensagem: '' })
        } catch {
            setStatus('Erro ao enviar mensagem. Tente novamente.')
        } finally {
            setSending(false)
            setTimeout(() => setStatus(null), 5000)
        }
    }

    return (
        <section className="contato" id="contato">
            <div className="container">
                <h2 className="section-title">Contato</h2>
                <p className="contato__subtitle">Entre em contato com a gente</p>

                {status ? (
                    <p className="contato__success">{status}</p>
                ) : (
                    <form className="contato__form" onSubmit={handleSubmit}>
                        <input
                            className="contato__input"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            value={form.nome}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="contato__input"
                            type="email"
                            name="email"
                            placeholder="Seu email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            className="contato__textarea"
                            name="mensagem"
                            placeholder="Sua mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn--primary contato__btn"
                            disabled={sending}
                        >
                            {sending ? 'Enviando...' : 'Enviar mensagem'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}

import { useState, useEffect } from 'react'
import './Planos.css'

const fallbackPlanos = [
    {
        id: 1,
        nome: 'Start',
        preco: 'R$ 500',
        features: ['5 manutenções mensais', 'App SEO', '1 sistema operacional'],
        cor: '#56CCF2',
    },
    {
        id: 2,
        nome: 'Mega',
        preco: 'R$ 1000',
        features: ['10 manutenções mensais', 'App SEO', '2 sistemas operacionais'],
        cor: '#B04CD9',
    },
    {
        id: 3,
        nome: 'Ultra',
        preco: 'R$ 1500',
        features: [
            '20 manutenções mensais',
            'App SEO',
            '4 sistemas operacionais',
            '24h de atendimento',
        ],
        cor: '#E33B3B',
    },
]

export default function Planos() {
    const [planos, setPlanos] = useState(fallbackPlanos)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/planos')
            .then((res) => {
                if (!res.ok) throw new Error('API indisponível')
                return res.json()
            })
            .then((data) => {
                setPlanos(data)
                setLoading(false)
            })
            .catch(() => {
                // Use fallback data if API is not available
                setLoading(false)
            })
    }, [])

    return (
        <section className="planos" id="planos">
            <div className="container">
                <h2 className="section-title">Planos</h2>
                {loading ? (
                    <p className="planos__loading">Carregando planos...</p>
                ) : (
                    <div className="planos__grid">
                        {planos.map((plano) => (
                            <div
                                className="planos__card"
                                key={plano.id}
                                style={{ '--card-accent': plano.cor }}
                            >
                                <div className="planos__card__header">
                                    <h3 className="planos__card__name">{plano.nome}</h3>
                                </div>
                                <p className="planos__card__price">{plano.preco}</p>
                                <div className="planos__card__features">
                                    {plano.features.map((feat, i) => (
                                        <p key={i}>{feat}</p>
                                    ))}
                                </div>
                                <div className="planos__card__cta-wrapper">
                                    <a href="#" className="btn btn--outline planos__card__btn">
                                        Assinar plano
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

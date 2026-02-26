import './Destaques.css'

const destaques = [
    {
        img: '/img/Destaque__IMG--01.png',
        alt: 'Destaque um',
        title: 'Conheça as primeiras etapas para a criação de um logotipo',
    },
    {
        img: '/img/Destaque__IMG--02.png',
        alt: 'Destaque dois',
        title: 'Veja dicas de como fotografar usando seu celular',
    },
]

export default function Destaques() {
    return (
        <section className="destaques" id="destaque">
            <div className="container">
                <h2 className="section-title">Destaques</h2>
                <div className="destaques__grid">
                    {destaques.map((item, index) => (
                        <article className="destaques__card" key={index}>
                            <img
                                src={item.img}
                                alt={item.alt}
                                className="destaques__card__img"
                            />
                            <div className="destaques__card__body">
                                <h3 className="destaques__card__title">{item.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <a href="#" className="btn btn--outline destaques__cta">
                        Receber destaques por email
                    </a>
                </div>
            </div>
        </section>
    )
}
